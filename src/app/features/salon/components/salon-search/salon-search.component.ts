import { Component } from '@angular/core';
import {SalonService} from "../../../../core/service/salon.service";
import {SalonSearchDto} from "../../../../core/domain/search/salon-search.dto";

@Component({
  selector: 'app-salon-search',
  templateUrl: './salon-search.component.html',
  styleUrls: ['./salon-search.component.scss']
})
export class SalonSearchComponent {
  searchResults: any[] = [];
  salonSearch: any = {};

  constructor(private searchService: SalonService) {}

  search(): void {
    console.log(this.salonSearch)
    this.searchService.search(this.salonSearch, null, null).subscribe(
      (results: any) => {
        this.searchResults = results.content;
        console.log(this.searchResults)
        this.processSearchResults(results.content);
      },
      (error) => {
        console.error('Error fetching search results:', error);
      }
    );
  }

  private processSearchResults(results: any[]): void {
    this.searchResults = results.map(result => {
      // Add a mainImageUrl property to each result
      result.mainImageUrl = this.getMainImageUrl(result.imageMetadata);
      return result;
    });
  }

  private getMainImageUrl(imageMetadataList: any[]): string {
    // Find the first image metadata where isMainImage is true
    const mainImageMetadata = imageMetadataList.find(metadata => metadata.isMainImage);

    // Assuming your storage service URL is stored in some variable like storageServiceUrl
    const storageServiceUrl = 'http://localhost:8081/storage/';

    // Return the URL of the main image
    return mainImageMetadata ? `${storageServiceUrl}${mainImageMetadata.imageId}` : '';
  }
}
