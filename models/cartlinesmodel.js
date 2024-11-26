import { supabase } from "../config/supabaseConfig.js";

export class cartlinesModel {
    static getCartlines = async() => {
        try {
            const { data, error } = await supabase
            .from('cartlines')
            .select('id, quantity, poster_id');
            if (error) {
                throw new Error(error.message);
            }
            else {
                return data;
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    static getCartlinesById = async id => {
        try {
            const { data, error } = await supabase
            .from('cartlines')
            .select('id, title, slug')
            .eq('id', id)
            .single()
            if (error) {
                throw new Error(error.message);
            }
            else {
                return data;
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    static async createCartlines(formdata) {
        try {
            const { data, error } = await supabase.from('cartlines')
            .insert([
                {
                    title: formdata.title,
                    slug: formdata.slug
                }
            ])
            .select('*')
            if (error) {
                throw new Error(error.message);
            }
            else {
                return data;
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    }

    static async updateCartlines(formdata) {
        try {
            const { data, error } = await supabase.from('cartlines')
            .update({
                title: formdata.title,
                slug: formdata.slug
            })
            .eq ('id', formdata.id)
            .select()
            .single()
            if (error) {
                throw new Error(error.message);
            }
            else {
                return data;
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}