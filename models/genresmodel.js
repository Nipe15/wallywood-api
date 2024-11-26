import { supabase } from "../config/supabaseConfig.js";

export class GenresModel {
    static getGenres = async() => {
        try {
            const { data, error } = await supabase
            .from('genres')
            .select('id, title, slug');
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

    static getGenreById = async id => {
        try {
            const { data, error } = await supabase
            .from('genres')
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

    static async createGenre(formdata) {
        try {
            const { data, error } = await supabase.from('genres')
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

    static async updateGenre(formdata) {
        try {
            const { data, error } = await supabase.from('genres')
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
     