"use server";

import { createClient } from "@/utils/supabase/server";

export const loginUser = async (form) => {
    const supabase = createClient();
    const result = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password,
    });
    return JSON.stringify(result);
};
