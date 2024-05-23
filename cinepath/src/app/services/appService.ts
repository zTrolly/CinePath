import { Injectable } from '@angular/core';
import { IReview, createReview } from '../interfaces/appInterface';
import { Firestore, addDoc, collection, collectionData, query, doc, setDoc,
  getDocs, deleteDoc, DocumentData, docSnapshots} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  constructor(private firestore: Firestore) {}

  async addReview(review: IReview): Promise<void> {
    const reviewDoc = await addDoc(collection(this.firestore, 'reviews'), review);
    console.log('Review added with ID: ', reviewDoc.id);
  }

  async addMockReview(): Promise<void> {
    const review: IReview = {
      id: '1',
      mediaType: 'movie',
      mediaId: 823464,
      rating: 5,
      review: 'Great movie!',
      createdAt: new Date()
    };
    await addDoc(collection(this.firestore, 'reviews'), review);
    console.log('Mock review added');
  }


  getReviews(): Observable<IReview[]> {
    const reviewsCollection = collection(this.firestore, 'reviews');
    const reviews = collectionData(reviewsCollection, {idField: 'id'}).pipe(
      map(reviews => reviews.map(review => createReview(review as IReview)))
    );
    return reviews;
  }

  async deleteReview(reviewId: string): Promise<void> {
    await deleteDoc(doc(this.firestore, 'reviews', reviewId));
    console.log('Review deleted with ID: ', reviewId);
  }

  async updateReview(reviewId: string, review: IReview): Promise<void> {
    await setDoc(doc(this.firestore, 'reviews', reviewId), review);
    console.log('Review updated with ID: ', reviewId);
  }

  async getReview(reviewId: string): Promise<IReview> {
    const review = await getDocs(query(collection(this.firestore, 'reviews')));
    const reviewData = review.docs.find(doc => doc.id === reviewId);
    if (reviewData) {
      return createReview(reviewData.data() as IReview);
    } else {
      throw new Error('Review not found');
    }
  }
}


export { IReview, createReview };
