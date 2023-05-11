import { supabaseServiceProvider } from "@/app/lib/supabase";
import { NextResponse } from "next/server";

const SUPABASE_URL = process.env.SUPABASE_URL ?? "";
const SUPABASE_KEY = process.env.SUPABASE_KEY ?? "";

export async function GET(request: Request) {
  const supabase = await supabaseServiceProvider(SUPABASE_URL, SUPABASE_KEY);
  const { data, error } = await supabase.from("users").select("*");
  return NextResponse.json({ data });
}
