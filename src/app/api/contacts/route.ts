import { NextRequest, NextResponse } from 'next/server';
import { insertContactSchema } from '@shared/schema';
import { z } from 'zod';
import { storage } from '@/lib/storage';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = insertContactSchema.parse(body);
    const contact = await storage.createContact(validatedData);
    
    return NextResponse.json({ success: true, id: contact.id });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.errors },
        { status: 400 }
      );
    } else {
      console.error('Contact form error:', error);
      return NextResponse.json(
        { error: 'Failed to submit contact form' },
        { status: 500 }
      );
    }
  }
}