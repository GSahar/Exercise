export class Document {
    s_number: String;
    d_date: Date;
    n_sum: Number;
    s_description: String;
    id: Number;
    constructor(obj: any) {
        this.s_number = obj && obj.s_number || null;
        this.d_date = obj && obj.d_date || null;
        this.n_sum = obj && obj.n_sum || null;
        this.s_description = obj && obj.s_description || null;
        this.id = obj && obj.id || null;
    }
}