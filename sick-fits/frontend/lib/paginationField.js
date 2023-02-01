import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  return {
    keyArgs: false, // tells Apollo we will take care of everything
    read(existing = [], { args, cache }) {
      console.log({ existing, args, cache });
      const { skip, first } = args;

      // read the # of items on the page from cache
      const data = cache.readQuery({ query: PAGINATION_QUERY });
      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      // check if we have existing items
      const items = existing.slice(skip, skip + first).filter((x) => x);
      // IF
      // ...there are items
      // ...AND there aren't enough items to satsify how many were requested
      // ...AND we are on the last page
      // THEN just send it
      if (items.length && items.length !== first && page === pages) {
        return items;
      }
      if (items.length !== first) {
        // we don't have any items. go to network to get them
        return false;
      }

      // If there are items, return from cache. don't go to network
      if (items.length) {
        console.log(
          `There are ${items.length} items in the cache! Sending to Apollo.`
        );
        return items;
      }

      return false; // fallback to network if either if statements don't work
    },
    // This runs when Apollo client comes back from the network with our products
    merge(existing, incoming, { args }) {
      const { skip, first } = args;
      console.log(`Merging items from newtwork ${incoming.length}`);
      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }
      console.log(merged);
      return merged;
    },
  };
}
