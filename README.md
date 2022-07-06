# Sr. Front-end Engineer tech assessment
As a Sr. Front-end Engineer we want to see your skills with architecture, security, performance and clean code.
<br />

The following tech stack are required:
- TypeScript
- React

These ones will be considered a differential, but are not required:
- [Apollo Client](https://www.apollographql.com/docs/react/) or [React Query](https://react-query.tanstack.com/)
- [Styled Components](https://styled-components.com/)
- Unit Tests

<br />

# Goal
Develop a responsive React application based on this [Figma](https://www.figma.com/file/IGiTFyYotEnc94XwfMuVCE/Tech-Assessment?node-id=0%3A1) file, consuming a GraphQL endpoint.

# Screens

## Participants
You should fetch all the `participants` from GraphQL and list them on this screen.
  
## Trials
You should fetch all the `trials` from GraphQL and list them on this screen.

## Enroll a participant
This is a form to enroll a new participant to a clinical trial, all fields are required.

After you fill all the fields and clicked to persist the participant to the `participants` collection (doing a mutation to the GraphQL), you should redirect the user to a success screen presenting a message that shows if the participant is eligible or not for the clinical trial.

An eligible participant should:
- HAS DIABETES
- DIDN'T HAVE COVID
- BMI > 18
- BMI < 30

> BMI Formula: **weight (lb) / [height (in)]2 x 703**
>
> Divide weight in pounds (lb) by height in inches (in) squared and multiplying by a conversion factor of 703

<br />

# GraphQL endpoint
```
https://meet-moose-89.hasura.app/v1/graphql
```

To fetch the data from this GraphQL endpoint you need to inform the following headers in the requests.

```javascript
{
    "content-type": "application/json",
    "x-hasura-admin-secret": "9zE0Tk9nT85FtEOC830iMkkfETYxctDJc2PUVsuDKmwII001T097833oLXCjGi4Q"
}
```

You can use https://studio.apollographql.com to play around and fetch information about the underlying schema

<br />

# Notes
- You need to be logged in with your Figma account to have access to all specs of the file and be able to extract colors, fonts, sizes and etc...
- Ensure that you have Node >=14.0.0 to run this project
- If you have any questions, don't hesitate to touch base with us.

<br />

# Running instructions
`yarn && yarn start`

<br />

# How to delivery your tech assessment
Clone this repo and push it to a private repo on your account, and then give access to the following users:
- [@joaom182](https://github.com/joaom182)
- [@lobo](https://github.com/lobo)
- [@heitorrubira](https://github.com/heitorrubira)

When you are done with the tech assessment, please send an email to:
- daniel@curebase.com
- joao.mainka@curebase.com
- marissa@curebase.com

Cheers! 🍻
