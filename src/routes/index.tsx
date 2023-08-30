import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <main class="mx-auto container p-4  ">
      <h1 class="text-4xl">Working in progress... ⌛</h1>
    </main>
  );
});

export const head: DocumentHead = {
  title: 'Hamburger Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
