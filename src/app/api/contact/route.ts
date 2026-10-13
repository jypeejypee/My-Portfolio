import { NextResponse } from "next/server";

// Contact form endpoint. TODO:
//  - send the email (Resend / Nodemailer) using keys from .env.local
//  - OR forward to a Java Spring Boot API at process.env.NEXT_PUBLIC_API_URL
export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Record<string, string> | null;
  if (!body) return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });

  // Honeypot filled → bot. Pretend success.
  if (body.company) return NextResponse.json({ ok: true });

  const { name, email, message } = body;
  if (!name || !email || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  // TODO: actually send it. For now it just logs on the server.
  console.log("[contact]", { name, email, message });
  return NextResponse.json({ ok: true });
}
