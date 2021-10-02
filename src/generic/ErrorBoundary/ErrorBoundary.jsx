import React, {Component} from 'react'

class ErrorBoundary extends Component  {

    constructor(props){
       super(props)

      this.state = {
         HasError : false
      }
   }

   static getDerivedStateFromError(error) {
       return { HasError: true }
   }

   componentDidCatch(error, errorInfo) {
       console.log("ErrorInfo", errorInfo)
   }
   
      

    render()
    {
        return (
            this.state.HasError ?
            (<h1>Hubo un error</h1>) 
            :
            (this.props.children)

        )
    }
}

export default ErrorBoundary