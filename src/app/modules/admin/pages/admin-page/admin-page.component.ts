import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { AdminService } from '@modules/admin/services/admin.service';
import { TrackService } from '@modules/tracks/services/track.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})

export class AdminPageComponent implements OnInit, OnDestroy{
  showEditFields: boolean = false;

  listResults: Array<TrackModel> = []
  newTrack: any = {
      name: "",
      album: "",
      cover: "",
      url: "",
      uid:"",
      artist:""
  }

  constructor(private trackService: TrackService, private adminService: AdminService) { }

  ngOnInit(): void {
    this.loadDataAll()
  }

  async loadDataAll(): Promise<any> {
    this.listResults = await this.trackService.getAllTracks$().toPromise()
  }

  editarPista(track: any) {
    this.newTrack = track;
    this.showEditFields = true;
  }

  async enviarEdicion() : Promise<any> {

    await this.adminService.editTrack$(this.newTrack).toPromise()
    
    this.showEditFields = false;
    this.newTrack = {
      name: "",
      album: "",
      cover: "",
      url: "",
      uid:"",
      artist:""
    };
    this.loadDataAll()
  }

  async agregarTrack() : Promise<any> {

    await this.adminService.addTrack$(this.newTrack).toPromise()
    
    this.showEditFields = false;
    this.newTrack = {
      name: "",
      album: "",
      cover: "",
      url: "",
      uid:"",
    };
    this.loadDataAll()
  }

  async deleteTrack() : Promise<any> {

    const confirmed = window.confirm('¿Estás seguro de que quieres eliminar esta pista?');

    if (confirmed) {
      await this.adminService.deleteTrack$(this.newTrack.uid).toPromise()
      
      this.showEditFields = false;
      this.newTrack = {
        name: "",
        album: "",
        cover: "",
        url: "",
        uid:"",
      };
      this.loadDataAll()
    }
  }

  ngOnDestroy(): void {
  }
}
