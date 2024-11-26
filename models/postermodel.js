import { supabase } from "../config/supabaseConfig.js";

export class posterModel{
static getAllRecords = async ()=>{
    try {
        const{data, error} = await supabase.from('posters').select()
        if (error){throw error}
        return data
    } catch (error) {
        console.error(error)
    }
   
}


static getRecordById = async id=>{
    try {
        const{data, error} = await supabase.from('posters').select().eq('id', id).single()
        if (error){throw error}
        return data
    } catch (error) {
        console.error(error)
    }
   
}
}