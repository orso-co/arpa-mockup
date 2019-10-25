import { WordpressCategory } from './../_models/wordpressCategory';
import { WordpressMedium } from '../_models/wordpressMedium';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressPost } from '../_models/wordpressPost';
import { map } from 'rxjs/operators';
import { WordpressUser } from '../_models/wordpressUser';
import { WordpressTag } from '../_models/wordpressTag';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {
  constructor(protected httpClient: HttpClient) {}
  baseUrl = 'http://backstage.orso.co/wp-json/wp/v2';

  getPosts(): Observable<WordpressPost[]> {
    return this.httpClient
      .get<any[]>(`${this.baseUrl}/posts?_embed`, {
        observe: 'response'
      })
      .pipe(
        map(response => {
          const news: WordpressPost[] = [];

          response.body.forEach(newsItem => {
            news.push(this.mapWordpressPost(newsItem));
          });

          return news;
        })
      );
  }

  private mapWordpressPost(rawData: any): WordpressPost {
    return {
      id: rawData.id,
      author: rawData._embedded.author[0].name,
      imageUrl:
        rawData['_embedded']['wp:featuredmedia'][0]['media_details'].sizes[
          'medium'
        ].source_url,
      categories: rawData['_embedded']['wp:term'][0].map(cat => cat.name),
      tags: rawData['_embedded']['wp:term'][1].map(tag => tag.name),
      date: rawData.date,
      modified: rawData.modified,
      title: rawData.title.rendered,
      excerpt: rawData.excerpt.rendered,
      content: rawData.content.rendered
    };
  }

  getPost(id: string): Observable<WordpressPost> {
    return this.httpClient
      .get<any>(`${this.baseUrl}/posts/${id}?_embed`, {
        observe: 'response'
      })
      .pipe(
        map(response => {
          return this.mapWordpressPost(response.body);
        })
      );
  }

  getTag(tagId: number): Observable<WordpressTag> {
    return this.httpClient.get<WordpressTag>(`${this.baseUrl}/tags/${tagId}`);
  }

  getUser(userId: number): Observable<WordpressUser> {
    return this.httpClient.get<WordpressUser>(
      `${this.baseUrl}/users/${userId}`
    );
  }

  getCategory(categoryId: number): Observable<WordpressCategory> {
    return this.httpClient.get<WordpressTag>(
      `${this.baseUrl}/categories/${categoryId}`
    );
  }

  getMedium(mediumId: number): Observable<WordpressMedium> {
    return this.httpClient.get<WordpressMedium>(
      `${this.baseUrl}/media/${mediumId}`
    );
  }
}
