import { Box, Image, Heading, Text, useColorModeValue, VStack } from '@chakra-ui/react'

import Layout from 'components/layout/Layout'

const Learned = ({ children }) => {
  const bgColor = useColorModeValue('gray.100', 'gray.700')

  return (
    <Box bgColor={bgColor} py={3} px={5} borderRadius={4} w="full">
      {children}
    </Box>
  )
}

const GameDevPage = () => (
  <>
    <Heading as="h1" my={8} textAlign="center">
      Game Dev
    </Heading>
    <VStack align="flex-start" spacing={6}>
      <Text>
        I will document my journey learning game development on this page. My main interest is to
        make VR games, but in order to establish solid foundations, I want to make simple games of
        various genres first, to practice specific skills.
      </Text>
      <Heading as="h2" size="lg" alignSelf="center" pt={4} pb={3}>
        Phase 1: Playing around and first VR tests
      </Heading>
      <Learned>
        <strong>Things learned</strong>: Basics of Unity, Unreal Engine, and fundamental game dev
        concepts
      </Learned>
      <Text>
        First, I wanted to see if it was even technically possible to develop{' '}
        <strong>VR games for my Meta Quest 2 on my Apple M1 laptop</strong>, because there were
        several potential single points of failures in that setup. I wanted to use 3D programs that
        support Apple Silicon, because game dev is resource intensive and I'm on a laptop. Apple
        Silicon is only supported in pre-release or beta versions of Unity and Visual Studio, and is
        not supported for Unreal Engine (it works under Rosetta 2 though). And the Oculus app also
        can't be installed on Mac. It took a few days of configuration but I finally got functioning
        environments, for both Unreal Engine and Unity (but they only work in specific versions).
      </Text>
      <Text>
        I know that <strong>Blender</strong> will be useful to learn at some point to create models,
        but I decided to focus on learning Unity or Unreal Engine first and use pre-made assets
        instead of making my own, since I am more interested in game development than 3D modeling at
        the moment.
      </Text>
      <Text>
        Then I set up <strong>Unreal Engine</strong> because unlike Unity, the starting templates
        already provide some basic functionality out-of-the-box, like making a first or third-person
        game, and a VR template as well. I played around with the VR template, made some basic
        shapes, basic materials, and added basic logic using Blueprints to my scenes, to for
        instance play a sound when I hit a djembe in VR, program some simple AI to make a character
        move randomly, or add the ability to jump. I tried setting up a C++ environment with VS Code
        but it was not working well, so I haven't tried coding in C++ yet.
      </Text>
      <Text>
        I then tried <strong>Unity</strong> because it supports natively <strong>Apple M1</strong>{' '}
        CPUs, and because it seems like there is a <strong>better official Oculus support</strong>.
        For instance Oculus provides scenes with hand models, and where you can grab items. It seems
        like it would have been a lot of work to get that working myself in Unreal Engine. Setting
        up Visual Studio was pretty straightforward and C# seems pretty intuitive so far with my
        JavaScript programming background.
      </Text>
      <Text>
        In Unreal Engine, I created an island with a simple house, a dog, a radio that plays Bob
        Marley songs, and djembes that play a sound when you hit them. Then, in Unity, I made a
        similar island that includes the hands and physics management provided by Oculus.
      </Text>
      <Image src="/img/gamedev/island.png" maxW="450px" borderRadius={4} alignSelf="center" />
      <Image src="/img/gamedev/island-2.png" maxW="450px" borderRadius={4} alignSelf="center" />
      <Text>
        From my very little hands-on experience, I like both Unity and Unreal Engine, but I think{' '}
        <strong>Unity is a better choice in my current situation</strong> (to develop VR games for
        Quest 2, and 2D games on an M1 Mac). So I will use Unity to ramp up my game development
        skills.
      </Text>
      <Text fontWeight="bold">Time spent: 7 days</Text>
      <Heading as="h2" size="lg" alignSelf="center" pt={4} pb={3}>
        Phase 2: Sonic-like platformer
      </Heading>
      <Learned>
        <strong>What I want to implement:</strong> Creating a basic 2D platformer with enemies,
        coins to collect, and an end goal. Adding a static UI to display the number of coins, and
        making a start screen. The character will have multiple animations based on if they are
        running, jumping, or idle. The character should also be able to shoot a projectile that can
        kill enemies.
      </Learned>
      <Heading as="h2" size="lg" alignSelf="center" pt={4} pb={3}>
        Phase 3: Top-down city management game
      </Heading>
      <Learned>
        <strong>What I want to implement:</strong> Managing resources such as wood, gold, food,
        electricity. Positioning simple buildings that cost resources or create resources using the
        mouse on a terrain grid. The game ends when the player has gathered some amount of gold.
      </Learned>
      <Heading as="h2" size="lg" alignSelf="center" pt={4} pb={3}>
        Phase 4: Top-down multiplayer arena
      </Heading>
      <Learned>
        <strong>What I want to implement:</strong> A game where multiple players can spawn on a
        simple map, and fight either AI enemies or each other. The goal is to beat as many enemies
        as possible.
      </Learned>
    </VStack>
  </>
)

GameDevPage.wrappers = page => <Layout maxW="container.md">{page}</Layout>

export default GameDevPage
