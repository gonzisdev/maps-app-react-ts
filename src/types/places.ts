export type PlacesResponse = {
    type:        string;
    query:       string[];
    features:    Feature[];
    attribution: string;
}

export type Feature = {
    id:            string;
    type:          string;
    place_type:    string[];
    relevance:     number;
    properties:    Properties;
    text_es:       string;
    language_es?:  Language;
    place_name_es: string;
    text:          string;
    language?:     Language;
    place_name:    string;
    bbox?:         number[];
    center:        number[];
    geometry:      Geometry;
    context:       Context[];
}

export type Context = {
    id:           string;
    mapbox_id:    string;
    wikidata?:    string;
    short_code?:  string;
    text_es:      string;
    language_es?: Language;
    text:         string;
    language?:    Language;
}

export enum Language {
    Es = "es",
}

export type Geometry = {
    type:        string;
    coordinates: number[];
}

export type Properties = {
    mapbox_id?:  string;
    wikidata?:   string;
    foursquare?: string;
    landmark?:   boolean;
    address?:    string;
    category?:   string;
}