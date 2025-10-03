export interface Protein {
    Gene: string, // Internal primary key in MongoDB
    Ensembl: string,
    Position: string,
    Description: string,
    Chromosome: Date,
    Image: string
}