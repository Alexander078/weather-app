import React from 'react'
import CityInfo from './CityInfo' // SUI: Subject under testing (objeto del testeo)
import { render } from '@testing-library/react'

test("CityInfo render", async () => {
   // AAA
   // Arrange
   // Act
   const city = "San Salvador"
   const country = "El Salvador"

   //Render: redenderiza el componente y retorna una serie de funciones de utilidad
   // en este caso utilizamos "findAllByRole" para "consultar a nuestro componente"
   // Vamos a analizar su estado en el "Assert"
   const { findAllByRole } = render(<CityInfo city={city} country={country}/>)
   // Assert
   const cityAndCountryComponents = await findAllByRole("heading")

   expect(cityAndCountryComponents[0]).toHaveTextContent(city)
   expect(cityAndCountryComponents[1]).toHaveTextContent(country)
})