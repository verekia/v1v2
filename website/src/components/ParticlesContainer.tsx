import { useColorModeValue } from '@chakra-ui/react'
import Particles from 'react-tsparticles'

const ParticlesContainer = () => {
  const particlesColor = useColorModeValue('#69f', '#69f')
  const direction = useColorModeValue('bottom', 'top')

  return (
    <Particles
      id="tsparticles"
      style={{ height: '100%' }}
      height="100%"
      options={{
        fpsLimit: 60,
        particles: {
          color: { value: particlesColor },
          move: { direction, enable: true, speed: 1.5 },
          number: { density: { enable: true, value_area: 1000 }, value: 60 },
          shape: { type: 'circle' },
          size: { random: true, value: 4 },
        },
        detectRetina: true,
      }}
    />
  )
}

export default ParticlesContainer
