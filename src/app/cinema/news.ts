export class News {
  Title: string;
  PublishDate: string;
  HTMLLead: string;
  HTMLContent: string;
  ImageURL: string;

  constructor(Title: string, PublishDate: string, HTMLLead: string, HTMLContent: string, ImageURL: string) {
    this.Title = Title;
    this.PublishDate = PublishDate;
    this.HTMLLead = HTMLLead;
    this.HTMLContent = HTMLContent;
    this.ImageURL = ImageURL;
  }
}
