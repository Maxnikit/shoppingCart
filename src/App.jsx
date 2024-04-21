import "@mantine/core/styles.css";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import { Group, AppShell, Burger } from "@mantine/core";
import HeaderTitle from "./components/HeaderTitle/HeaderTitle";
import NavButtons from "./components/NavButtons/NavButtons";

function App() {
  // TODO Make title smaller on mobile(or header bigger)
  // TODO make it so burger closes when clicking links on mobile
  // TODO fix layout shift by scrollbar
  // TODO add navigation to home when pressing title
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <HeaderTitle />
            <Group ml="xl" gap={0} visibleFrom="sm">
              <NavButtons />
            </Group>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar py="md" px={4}>
        <NavButtons />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
