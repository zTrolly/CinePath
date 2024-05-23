 interface IReview {
  id: string;
  mediaType: string;
  mediaId: number;
  rating: number;
  review: string;
  createdAt: Date;
}

function createReview(review: IReview): IReview {
  return {
    ...review,
    createdAt: new Date(review.createdAt)
  };
}

export { IReview, createReview };

