import { ArtistModel } from "./artist.model";

export interface TrackModel {
    name: string;
    album: string;
    cover: string;
    url: string;
    uid: string | number;
    artist?: ArtistModel;
}