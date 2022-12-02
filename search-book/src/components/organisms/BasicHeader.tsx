import { Header, Text, ActionIcon, useMantineColorScheme, Group, Box, Anchor } from '@mantine/core'
import { IconSun, IconMoonStars, IconBook } from '@tabler/icons';
import Link from 'next/link';

export const BasicHeader = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Header height={70} sx={(theme) => ({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.blue[0]
    })}>
      <Box p='md' sx={() => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: "100%",
        maxWidth: '1280px',
        margin: 'auto',
      })}>
        <Anchor component={Link} href="/" sx={() => ({
          transition: "opacity 0.3s ease-in",
          ":hover": {
            textDecoration: "none",
            opacity: 0.5,
            transition: "opacity 0.3s ease-in"
          }
        })}>
          <Group spacing={5}>
            <IconBook size={32} color={dark ? '#C1C2C5' : '#565656'} />
            <Text size={24} color={dark ? '#C1C2C5' : '#565656'} fw='bold'>Search Book</Text>
          </Group>
        </Anchor>
        <Group>
          <ActionIcon
            variant="outline"
            color={dark ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
          </ActionIcon>
        </Group >
      </Box>
    </Header >
  )
}