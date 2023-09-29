import getBillboards from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

interface Props {}

const HomePage = async (props: Props) => {
  const billboard = await getBillboards("886a3650-0a9d-43bc-a405-f08c7a4c4248");

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
