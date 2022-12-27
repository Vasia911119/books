import { createSelector } from '@reduxjs/toolkit';

export const getBooks = state => state.books.items;
export const getLoading = state => state.books.loading;
export const getError = state => state.books.error;
export const getFilterRating = state => state.books.filter.filterRating;
export const getFilterTitle = state => state.books.filter.filterTitle;
export const getchackboxRaview = state => state.books.filter.chackboxRaview;

export const findBook = createSelector(
  [getBooks, getFilterRating, getFilterTitle, getchackboxRaview],
  (items, filterRating, filterTitle, chackboxRaview) => {
    const normalizedFilterRating = filterRating.toLowerCase();
    const normalizedFilterTitle = filterTitle.toLowerCase();

    console.log(normalizedFilterRating);
    const fileBooks = items.already.filter(({ title, review }) =>
      chackboxRaview === true
        ? review !== null && title.toLowerCase().includes(normalizedFilterTitle)
        : title.toLowerCase().includes(normalizedFilterTitle),
    );

    console.log(fileBooks);

    if (normalizedFilterRating !== '') {
      const ratingBooks = fileBooks.filter(
        ({ rating }) => rating === Number(normalizedFilterRating),
      );
      const sortedContacts = [...ratingBooks].sort((a, b) =>
        a.title.localeCompare(b.title),
      );
      return sortedContacts;
    }
    const sortedContacts = [...fileBooks].sort((a, b) =>
      a.title.localeCompare(b.title),
    );

    return sortedContacts;
  },
);
