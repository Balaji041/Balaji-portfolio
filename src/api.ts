import type { ContactPayload, Resume } from "./types";

const BASE_URL = (import.meta.env.VITE_API_URL as string | undefined) ?? "http://localhost:3000";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...init,
  });
  if (!res.ok) {
    const text = await res.text().catch(() => res.statusText);
    throw new Error(text || `HTTP ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export function fetchResume(): Promise<Resume> {
  return request<Resume>("/api/resume");
}

export async function submitContact(payload: ContactPayload): Promise<void> {
  await request<unknown>("/api/contact", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
