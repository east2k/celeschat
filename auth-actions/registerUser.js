"use server";

import { createClient } from "@/utils/supabase/server";

export const registerUser = async (form) => {
    const supabase = createClient();
    const result = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
            data: {
                displayName: form.displayName,
            },
        },
    });

    return JSON.stringify(result);
};
