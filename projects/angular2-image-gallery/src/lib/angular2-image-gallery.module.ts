import { NgModule } from '@angular/core'
import { ImageService } from './services/image.service'
import { GalleryComponent } from './gallery/gallery.component'
import { ViewerComponent } from './viewer/viewer.component'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    GalleryComponent,
    ViewerComponent
  ],
  providers: [
    ImageService
  ],
  exports: [
    GalleryComponent,
    ViewerComponent
  ]
})
export class Angular2ImageGalleryModule {
}
