import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().trim().min(1, "Įveskite vardą").max(200),
  contact: z.string().trim().min(3, "Įveskite telefoną arba el. paštą").max(300),
  message: z.string().trim().min(1, "Aprašykite užklausą").max(5000),
});

export type InquiryInput = z.infer<typeof inquirySchema>;

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((data) => inquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("inquiries").insert({
      name: data.name,
      contact: data.contact,
      message: data.message,
    });
    if (error) {
      console.error("Failed to save inquiry:", error.message);
      throw new Error("Nepavyko išsaugoti užklausos. Pabandykite dar kartą.");
    }
    return { ok: true as const };
  });
