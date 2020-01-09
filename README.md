# freecodecamp_frontendlibraries

All the projects are in their respective folder inside `Projects/`

Each project is created using `npx create-react-app my-project --template typescript`

The validation of the code is done via the FCC chai test runner. It is inserted in some projects
via the following snippet:
```html
  <script>
    function loadFCC_Test() {
      const script = document.createElement('script')
      script.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'
      script.async = true
      document.body.append(script)
    }

    loadFCC_Test();
  </script>
```

at the bottom of the `index.html` page.

You can see it in **calculator** and **pomodoro**.