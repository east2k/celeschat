"use server";

import { createClient } from "@/utils/supabase/server";

export const signoutUser = async () => {
    const supabase = createClient();
    const result = await supabase.auth.signOut();
    return JSON.stringify(result);
};
