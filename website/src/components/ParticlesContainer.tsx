import { useColorModeValue } from '@chakra-ui/react'
import Particles from 'react-tsparticles'

const ParticlesContainer = () => {
  const isDark = useColorModeValue(false, true)

  return (
    isDark && (
      <Particles
        id="tsparticles"
        style={{ height: '100%' }}
        height="100%"
        options={{
          fpsLimit: 60,
          particles: {
            color: { value: '#68f' },
            move: { direction: 'top', enable: true, speed: 1.5 },
            number: { density: { enable: true, value_area: 1000 }, value: 60 },
            shape: { type: 'circle' },
            size: { random: true, value: 4 },
          },
          detectRetina: true,
        }}
      />
    )
  )
}

export default ParticlesContainer
