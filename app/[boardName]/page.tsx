import ButtonSmall from '@/components/button-small';
import Header from '@/components/header';

const BoardPage = () => {
  return (
    <main className="bg-sky-blue-light h-screen flex flex-col">
      <Header />
      <section className="flex items-center justify-center px-12 grow">
        <div className="flex flex-col items-center">
          <h6 className="font-semibold text-gray text-2xl mb-8 text-center">
            This board is empty. Create a new column to get started.
          </h6>
          <ButtonSmall content="+ Add New Column" />
        </div>
      </section>
    </main>
  );
};

export default BoardPage;
