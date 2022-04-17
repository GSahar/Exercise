export class DocDetail {
    id_doc: Number;
    s_name: String;
    s_number: String;
    id: Number;
    n_sum: Number;
    constructor(obj: any) {
        this.id_doc = obj && obj.id_doc || null;
        this.s_name = obj && obj.s_name || null;
        this.s_number = obj && obj.s_number || null;        
        this.id = obj && obj.id || null;
        this.n_sum = obj && obj.n_sum || null;
    }
}