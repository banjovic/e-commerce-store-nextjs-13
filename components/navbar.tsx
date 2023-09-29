import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";

export const revalidate = 0;

const NavBar = async () => {
  const categories = await getCategories();

  return (
    <div className='border-b'>
      <Container>
        <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center'>
          <Link href='/'>
            <p className='font-bold text-xl'>Victoria Store</p>
          </Link>

          <MainNav data={categories} />

          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
