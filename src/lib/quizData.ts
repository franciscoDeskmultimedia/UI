export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const quizData: Record<string, QuizQuestion[]> = {
  fundamentals: [
    {
      question: "What is the main purpose of a design system?",
      options: [
        "To make every page look exactly the same",
        "To provide reusable tokens and components for consistency",
        "To replace the need for designers",
        "To slow down the development process",
      ],
      correctIndex: 1,
      explanation:
        "A design system provides reusable tokens (colours, spacing, typography) and components that ensure visual consistency across an application.",
    },
    {
      question: "Which of these is NOT a common interaction state for a button?",
      options: ["Hover", "Focus", "Expanded", "Disabled"],
      correctIndex: 2,
      explanation:
        "Common button states include default, hover, active/pressed, focus, and disabled. 'Expanded' is not a standard button interaction state.",
    },
    {
      question: "What is the minimum contrast ratio for normal text according to WCAG AA?",
      options: ["2:1", "3:1", "4.5:1", "7:1"],
      correctIndex: 2,
      explanation:
        "WCAG AA requires a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text (18px+ bold or 24px+ regular).",
    },
    {
      question: "Why is consistency important in UI design?",
      options: [
        "It saves money on design tools",
        "It reduces cognitive load and builds user trust",
        "It makes the product look boring",
        "It is only important for mobile apps",
      ],
      correctIndex: 1,
      explanation:
        "Consistency reduces the cognitive effort required to learn and use an interface. When patterns are predictable, users feel confident.",
    },
    {
      question: "What does 'affordance' mean in UI design?",
      options: [
        "The cost of building a feature",
        "A visual cue that suggests how an element can be used",
        "The number of users who can afford the product",
        "A type of animation effect",
      ],
      correctIndex: 1,
      explanation:
        "An affordance is a property or visual cue that suggests how an element should be used — for example, a raised button looks 'clickable'.",
    },
  ],
  "less-is-more": [
    {
      question: "What is Hick's Law?",
      options: [
        "Users prefer dark mode interfaces",
        "Decision time increases with the number of options",
        "Bigger buttons get more clicks",
        "Users read from left to right",
      ],
      correctIndex: 1,
      explanation:
        "Hick's Law states that the time to make a decision increases logarithmically with the number of choices presented.",
    },
    {
      question: "What is progressive disclosure?",
      options: [
        "Showing all features at once",
        "Revealing information gradually as needed",
        "Using animations to reveal content",
        "A type of form validation",
      ],
      correctIndex: 1,
      explanation:
        "Progressive disclosure reduces complexity by only showing essential information upfront and revealing details when the user requests them.",
    },
    {
      question: "What does 'mobile-first' design mean?",
      options: [
        "Only designing for mobile devices",
        "Designing for the smallest screen first, then scaling up",
        "Using mobile-specific frameworks",
        "Making buttons bigger on mobile",
      ],
      correctIndex: 1,
      explanation:
        "Mobile-first means starting the design process with the smallest viewport, then progressively enhancing for larger screens.",
    },
    {
      question: "Which technique helps reduce visual clutter?",
      options: [
        "Adding more icons and decorations",
        "Using multiple font families",
        "Removing unnecessary borders and backgrounds",
        "Adding drop shadows to every element",
      ],
      correctIndex: 2,
      explanation:
        "Removing unnecessary visual elements like redundant borders, backgrounds, and decorations creates a cleaner, more focused interface.",
    },
    {
      question: "Why should you limit the number of actions on a page?",
      options: [
        "To save server resources",
        "To reduce decision fatigue and focus user attention",
        "Because browsers have a limit on button elements",
        "It's a legal requirement",
      ],
      correctIndex: 1,
      explanation:
        "Fewer actions reduce decision fatigue (Hick's Law) and help users focus on the most important task rather than being overwhelmed.",
    },
  ],
  colour: [
    {
      question: "Why is HSB preferred over RGB for creating colour variations?",
      options: [
        "HSB produces more colours",
        "HSB is more intuitive — you can adjust hue, saturation, brightness independently",
        "RGB doesn't work in CSS",
        "HSB loads faster in browsers",
      ],
      correctIndex: 1,
      explanation:
        "HSB (Hue, Saturation, Brightness) is more intuitive because each value maps to a visual concept, making it easier to create harmonious variations.",
    },
    {
      question: "How many colour variations should you create for each brand colour?",
      options: ["2", "3", "5", "10"],
      correctIndex: 2,
      explanation:
        "Create 5 variations — Darkest, Dark, Base, Light, Lightest — to cover all UI needs from backgrounds to text.",
    },
    {
      question: "What is the purpose of using transparent colour layers?",
      options: [
        "To make elements invisible",
        "They adapt to any background colour automatically",
        "They reduce file size",
        "They improve SEO",
      ],
      correctIndex: 1,
      explanation:
        "Transparent overlays (e.g., rgba) adapt to any base colour, making hover states and overlays work universally.",
    },
    {
      question: "In dark mode, what should background colours be?",
      options: [
        "Pure black (#000000)",
        "Dark grey tones, not pure black",
        "The inverse of light mode colours",
        "Always blue-tinted",
      ],
      correctIndex: 1,
      explanation:
        "Pure black creates too much contrast. Use dark greys (e.g., #1a1a2e, #16213e) for more comfortable dark mode reading.",
    },
    {
      question: "Why shouldn't you rely on colour alone to convey meaning?",
      options: [
        "Colours render differently on Mac and Windows",
        "Some users are colour-blind and can't distinguish certain hues",
        "Colours slow down page loading",
        "It's against CSS best practices",
      ],
      correctIndex: 1,
      explanation:
        "About 8% of men are colour-blind. Always pair colour with icons, labels, or patterns so information is accessible to everyone.",
    },
  ],
  layout: [
    {
      question: "What does the Law of Proximity state?",
      options: [
        "Larger elements are more important",
        "Elements placed close together are perceived as related",
        "Users prefer centred layouts",
        "White space should be minimised",
      ],
      correctIndex: 1,
      explanation:
        "The Gestalt Law of Proximity states that objects near each other are perceived as belonging to the same group.",
    },
    {
      question: "What is the standard number of columns in a grid system?",
      options: ["6", "8", "10", "12"],
      correctIndex: 3,
      explanation:
        "A 12-column grid is the most common because 12 divides evenly by 2, 3, 4, and 6, providing flexible layout options.",
    },
    {
      question: "Why is generous white space important?",
      options: [
        "It fills the page when you don't have enough content",
        "It makes interfaces feel premium and reduces cognitive load",
        "It improves search engine rankings",
        "It is only important for print design",
      ],
      correctIndex: 1,
      explanation:
        "White space improves readability, creates visual breathing room, and makes interfaces feel professional and premium.",
    },
    {
      question: "What alignment is best for body text in LTR languages?",
      options: ["Centre-aligned", "Right-aligned", "Left-aligned", "Justified"],
      correctIndex: 2,
      explanation:
        "Left-aligned text creates a consistent starting point for each line, making it the easiest to read for left-to-right languages.",
    },
    {
      question: "What is 'the squint test'?",
      options: [
        "Testing your UI on a small screen",
        "Squinting at your design to see if the hierarchy is still clear",
        "A method for testing colour contrast",
        "A way to measure font sizes",
      ],
      correctIndex: 1,
      explanation:
        "The squint test involves squinting at your design to blur the details — if the visual hierarchy is still clear, your layout is well structured.",
    },
  ],
  typography: [
    {
      question: "What is the recommended minimum line height for body text?",
      options: ["1.0", "1.2", "1.5", "2.0"],
      correctIndex: 2,
      explanation:
        "A minimum line height of 1.5 for body text ensures comfortable reading. Tighter line heights cause reading fatigue.",
    },
    {
      question: "What is the ideal line length (measure) for body text?",
      options: [
        "20–30 characters",
        "45–75 characters",
        "100–120 characters",
        "It doesn't matter",
      ],
      correctIndex: 1,
      explanation:
        "45–75 characters per line is the sweet spot. Too narrow requires constant eye movement; too wide makes it hard to find the next line.",
    },
    {
      question: "How many font weights should you typically use?",
      options: [
        "1 only (Regular)",
        "2 (Regular and Bold)",
        "4 or more for variety",
        "As many as available",
      ],
      correctIndex: 1,
      explanation:
        "Two weights — Regular (400) and Bold (700) — is usually sufficient. More weights create visual noise without adding clarity.",
    },
    {
      question: "What should you do with letter spacing for large headings?",
      options: [
        "Increase it significantly",
        "Keep it the same as body text",
        "Decrease it slightly",
        "Remove it entirely",
      ],
      correctIndex: 2,
      explanation:
        "Large text benefits from slightly tighter (decreased) letter spacing because the natural spacing at large sizes appears too loose.",
    },
    {
      question: "Why should you avoid using pure black (#000) for text?",
      options: [
        "It doesn't render on some browsers",
        "It creates harsh contrast and feels cold — use off-black instead",
        "Black is not available in CSS",
        "It makes text unreadable",
      ],
      correctIndex: 1,
      explanation:
        "Pure black on white creates maximum contrast that strains the eyes. Off-black (#1d1d1f) feels warmer and more natural.",
    },
  ],
  copywriting: [
    {
      question: "Why is sentence case preferred over title case for UI text?",
      options: [
        "It uses fewer capital letters, saving memory",
        "It's more natural, conversational, and easier to scan",
        "Title case is grammatically incorrect",
        "Sentence case looks more professional",
      ],
      correctIndex: 1,
      explanation:
        "Sentence case feels more natural and conversational. It's faster to read because our eyes are trained to recognise word shapes in lowercase.",
    },
    {
      question: "What makes a good error message?",
      options: [
        "Showing the error code for debugging",
        "Using red text and exclamation marks",
        "Explaining what went wrong and how to fix it",
        "Being as brief as possible, like 'Error'",
      ],
      correctIndex: 2,
      explanation:
        "Good error messages explain the problem clearly and provide actionable guidance on how to resolve it.",
    },
    {
      question: "What does 'front-loading' text mean?",
      options: [
        "Loading text content before images",
        "Putting the most important words at the beginning",
        "Using bold text at the start of paragraphs",
        "Adding a loading indicator for text",
      ],
      correctIndex: 1,
      explanation:
        "Front-loading means placing the key information at the start of a sentence or heading, since users often scan only the first few words.",
    },
    {
      question: "Why should you limit UPPERCASE text in UIs?",
      options: [
        "UPPERCASE uses more bandwidth",
        "It's harder to read and feels like shouting",
        "Screen readers can't process it",
        "It's against web standards",
      ],
      correctIndex: 1,
      explanation:
        "UPPERCASE text lacks the varied letter shapes that aid reading speed. It also conveys a 'shouting' tone that feels aggressive.",
    },
    {
      question: "What vocabulary practice improves usability?",
      options: [
        "Using complex words to sound professional",
        "Varying synonyms to avoid repetition",
        "Using the same word consistently for the same concept",
        "Using abbreviations to save space",
      ],
      correctIndex: 2,
      explanation:
        "Consistent vocabulary reduces confusion. If you call it 'Delete' in one place, don't call it 'Remove' elsewhere.",
    },
  ],
  buttons: [
    {
      question: "What are the 3 button weights in order of importance?",
      options: [
        "Large, Medium, Small",
        "Primary, Secondary, Tertiary",
        "Bold, Regular, Light",
        "Action, Info, Cancel",
      ],
      correctIndex: 1,
      explanation:
        "Primary (filled) for the main action, Secondary (outlined) for less important, and Tertiary (text/link) for the least important.",
    },
    {
      question: "What is the minimum recommended touch target size?",
      options: ["24×24px", "32×32px", "44×44px", "60×60px"],
      correctIndex: 2,
      explanation:
        "WCAG 2.5.5 recommends at least 44×44 CSS pixels for touch targets to ensure all users can tap accurately.",
    },
    {
      question: "Why should you avoid disabled buttons?",
      options: [
        "They are not supported in all browsers",
        "They don't explain WHY the action is unavailable",
        "They increase page load time",
        "They are deprecated in HTML5",
      ],
      correctIndex: 1,
      explanation:
        "Disabled buttons provide no feedback about why the action is blocked. An enabled button with inline validation is more helpful.",
    },
    {
      question: "What should a destructive action button include?",
      options: [
        "A larger font size",
        "A confirmation step to prevent accidents",
        "A different animation",
        "Multiple icons",
      ],
      correctIndex: 1,
      explanation:
        "Destructive actions (delete, remove) should include a confirmation dialog to add friction and prevent accidental data loss.",
    },
    {
      question: "What makes button text effective?",
      options: [
        "Using short generic labels like 'OK' or 'Submit'",
        "Using descriptive labels like 'Save project' that explain the action",
        "Always using single words",
        "Matching the page title",
      ],
      correctIndex: 1,
      explanation:
        "Descriptive button text like 'Save project' or 'Send message' clearly communicates what will happen, reducing uncertainty.",
    },
  ],
  forms: [
    {
      question: "Why is a single-column layout preferred for forms?",
      options: [
        "It uses less CSS",
        "It maintains consistent downward momentum and is easier to complete",
        "Multi-column forms don't work on Firefox",
        "It looks more modern",
      ],
      correctIndex: 1,
      explanation:
        "Single-column forms create a clear, straight-down path that's faster to complete. Multi-column layouts cause eye zig-zagging.",
    },
    {
      question: "Where should form labels be placed?",
      options: [
        "Inside the input as placeholder text",
        "Below the input field",
        "Above the input field",
        "To the right of the input",
      ],
      correctIndex: 2,
      explanation:
        "Labels above inputs are visible at all times and faster to complete than side-aligned labels. Never use placeholders as labels.",
    },
    {
      question: "When should you use radio buttons instead of a dropdown?",
      options: [
        "When there are more than 10 options",
        "When there are fewer than ~7 options",
        "When the form is on mobile",
        "Always use dropdowns",
      ],
      correctIndex: 1,
      explanation:
        "For fewer than ~7 options, radio buttons show all choices at once, reducing interaction cost compared to opening a dropdown.",
    },
    {
      question: "What is the benefit of inline form validation?",
      options: [
        "It reduces server load",
        "It provides immediate, contextual feedback as users type",
        "It prevents form submission",
        "It makes forms look more professional",
      ],
      correctIndex: 1,
      explanation:
        "Inline validation gives immediate feedback right next to the field, helping users correct errors in context rather than after submission.",
    },
    {
      question: "Should you mark required or optional fields?",
      options: [
        "Mark required fields with an asterisk",
        "Mark optional fields, since most should be required",
        "Don't mark either",
        "Mark both required and optional",
      ],
      correctIndex: 1,
      explanation:
        "If most fields are required, mark the few optional ones instead. This keeps the form looking cleaner.",
    },
  ],
  "react-components": [
    {
      question: "What is the correct way to define a functional component?",
      options: [
        "function MyComponent() { return <div /> }",
        "class MyComponent extends React.Component {}",
        "const MyComponent = new Component()",
        "function myComponent() { return <div /> }",
      ],
      correctIndex: 0,
      explanation:
        "React functional components are JavaScript functions that return JSX. They must start with a capital letter (PascalCase) to distinguish them from HTML tags.",
    },
    {
      question: "Which of these is NOT a valid rule for JSX?",
      options: [
        "Tags must be closed",
        "Adjacent elements must be wrapped in a parent",
        "It can only contain HTML tags, no custom components",
        "camelCase is used for attributes like className",
      ],
      correctIndex: 2,
      explanation:
        "JSX can contain both HTML tags and custom React components. In fact, composing custom components is a core feature of React.",
    },
  ],
  "react-state": [
    {
      question: "What does the useState hook return?",
      options: [
        "The current state value only",
        "A function to update state only",
        "An array with two elements: [currentValue, updateFunction]",
        "An object { value, set }",
      ],
      correctIndex: 2,
      explanation:
        "useState returns an array with exactly two values: the current state value and a function that lets you update it.",
    },
    {
      question: "What happens when you call a state setter function?",
      options: [
        "The variable updates immediately without re-rendering",
        "React schedules a re-render of the component",
        "The entire page reloads",
        "Nothing happens until you refresh",
      ],
      correctIndex: 1,
      explanation:
        "Updating state triggers a re-render. React will call your component function again to reflect the new state in the UI.",
    },
  ],
  "react-props": [
    {
      question: "How do you pass data from a parent to a child component?",
      options: [
        "Using State",
        "Using Props",
        "Using LocalStorage",
        "Using Global Variables",
      ],
      correctIndex: 1,
      explanation:
        "Props (short for properties) are the standard way to pass read-only data from a parent component down to a child component.",
    },
    {
      question: "Can a child component modify its own props?",
      options: [
        "Yes, freely",
        "No, props are read-only (immutable)",
        "Only if the parent allows it",
        "Only text props",
      ],
      correctIndex: 1,
      explanation:
        "Props are read-only. A component cannot change its own props; it must receive new props from its parent to update.",
    },
  ],
  "react-events": [
    {
      question: "What is the correct syntax for an onClick handler in React?",
      options: [
        "onclick='handleClick()'",
        "onClick={handleClick}",
        "onClick='handleClick'",
        "click={handleClick}",
      ],
      correctIndex: 1,
      explanation:
        "React uses camelCase events (onClick) and takes a function reference inside curly braces {handleClick}, not a string.",
    },
    {
      question: "What is a 'SyntheticEvent' in React?",
      options: [
        "A fake event for testing",
        "A cross-browser wrapper around the native browser event",
        "An event that only happens in virtual DOM",
        "A planned future event",
      ],
      correctIndex: 1,
      explanation:
        "React wraps native browser events in SyntheticEvent to ensure consistent behavior across different browsers.",
    },
  ],
  "react-lists": [
    {
      question: "Why do items in a list need a 'key' prop?",
      options: [
        "To style them differently",
        "To help React identify which items have changed, added, or removed",
        "It's required by HTML standards",
        "To sort the list automatically",
      ],
      correctIndex: 1,
      explanation:
        "Keys must be unique among siblings. They help React's reconciliation algorithm efficiently update list items.",
    },
    {
      question: "Which of these is the best value to use as a key?",
      options: [
        "Math.random()",
        "The array index (if the list can respond)",
        "A unique ID from your data (like database ID)",
        "The item's text content (if not unique)",
      ],
      correctIndex: 2,
      explanation:
        "A stable, unique ID is best. Avoid indexes if the list can be reordered, and avoid random values which cause unnecessary re-renders.",
    },
  ],
  "react-effects": [
    {
      question: "When does useEffect run by default (no dependency array)?",
      options: [
        "Only on mount",
        "Only when state changes",
        "After every render",
        "Never",
      ],
      correctIndex: 2,
      explanation:
        "Without a dependency array, useEffect runs after every single render. You usually want to provide an array to limit this.",
    },
    {
      question: "How do you make an effect run ONLY once on mount?",
      options: [
        "Pass an empty dependency array []",
        "Pass [true]",
        "Don't pass a second argument",
        "Use useMount instead",
      ],
      correctIndex: 0,
      explanation:
        "Passing an empty array [] tells React that your effect doesn't depend on any values from props or state, so it never needs to re-run.",
    },
  ],
  "react-adv-reducer": [
    {
      question: "When should you prefer useReducer over useState?",
      options: [
        "Always, it's faster",
        "When state logic is complex or next state depends on previous state",
        "Only for string values",
        "When you want to use Redux",
      ],
      correctIndex: 1,
      explanation:
        "useReducer is best for complex state logic involving multiple sub-values or when the next state depends on the previous one.",
    },
    {
      question: "What does the dispatch function do?",
      options: [
        "It updates the state directly",
        "It sends an action object to the reducer function",
        "It restarts the component",
        "It fetches data from an API",
      ],
      correctIndex: 1,
      explanation:
        "dispatch sends an 'action' to your reducer. The reducer then decides how to update the state based on that action.",
    },
  ],
  "react-adv-context": [
    {
      question: "What is the primary problem Context solves?",
      options: [
        "State management performance",
        "Prop drilling (passing props through many layers)",
        "CSS styling issues",
        "API fetching",
      ],
      correctIndex: 1,
      explanation:
        "Context allows you to share data globally (like themes or user data) without passing props manually at every level.",
    },
    {
      question: "What component is used to provide a value to the context tree?",
      options: [
        "<Context.Consumer>",
        "<Context.Provider>",
        "<Context.Give>",
        "<Context.Share>",
      ],
      correctIndex: 1,
      explanation:
        "The Provider component wraps part of your app and makes the 'value' prop available to all nested components.",
    },
  ],
  "react-adv-perf": [
    {
      question: "What does React.memo do?",
      options: [
        "Memoizes the result of a function",
        "Prevents a component from re-rendering if its props haven't changed",
        "Caches API calls",
        "Memoizes a value inside a component",
      ],
      correctIndex: 1,
      explanation:
        "React.memo is a higher-order component that skips re-rendering the component if its props are the same as the last render.",
    },
    {
      question: "When should you use useMemo?",
      options: [
        "For every calculation",
        "Only for expensive calculations that run on every render",
        "To memoize functions (use useCallback instead)",
        "To store state",
      ],
      correctIndex: 1,
      explanation:
        "useMemo is useful for heavy calculations. Using it for cheap operations adds overhead without benefit.",
    },
  ],
  "react-adv-hooks": [
    {
      question: "What rule must Custom Hooks follow?",
      options: [
        "They must return JSX",
        "They must start with 'use' (e.g., useDesktop)",
        "They must be classes",
        "They cannot use other hooks",
      ],
      correctIndex: 1,
      explanation:
        "React enforces that custom hooks start with 'use' so it can automatically check for violations of the Rules of Hooks.",
    },
    {
      question: "Why creates a custom hook?",
      options: [
        "To share stateful logic between components",
        "To make the app run faster",
        "To style components",
        "To replace Redux",
      ],
      correctIndex: 0,
      explanation:
        "Custom hooks allow you to extract and reuse stateful logic (like data fetching or form handling) across multiple components.",
    },
  ],
  "react-adv-refs": [
    {
      question: "Does changing a useRef value trigger a re-render?",
      options: [
        "Yes, always",
        "No, never",
        "Only if it's attached to a DOM element",
        "Yes, if used in useEffect",
      ],
      correctIndex: 1,
      explanation:
        "Updating current.value of a ref does not notify React, so it does not trigger a re-render.",
    },
    {
      question: "What is a common use case for useRef?",
      options: [
        "Managing form state",
        "Accessing DOM elements imperatively (e.g., focus)",
        "Sharing global data",
        "Simple counters",
      ],
      correctIndex: 1,
      explanation:
        "useRef is commonly used to access underlying DOM nodes to call methods like focus() or scrollIntoView().",
    },
  ],
  // -------------------------
  // FRONTEND FUNDAMENTALS
  // -------------------------
  "fe-html-css": [
    {
      question: "Which CSS property controls the space INSIDE an element's border?",
      options: ["Margin", "Padding", "Border-width", "Outline"],
      correctIndex: 1,
      explanation: "Padding is the space between the content and the border. Margin is the space outside the border."
    },
    {
      question: "What is the Semantic Web?",
      options: [
        "A web where computers understand the meaning of information",
        "Just use <div> for everything",
        "Adding more comments to your code",
        "Using AI to write HTML"
      ],
      correctIndex: 0,
      explanation: "Semantic HTML uses tags (like <article>, <nav>, <header>) that convey meaning to browsers and assistive technologies."
    }
  ],
  "fe-javascript": [
    {
      question: "What is the difference between 'let' and 'const'?",
      options: [
        "let is global scope, const is function scope",
        "const variables cannot be reassigned, let variables can",
        "There is no difference",
        "const is faster than let"
      ],
      correctIndex: 1,
      explanation: "const creates a read-only reference to a value. You cannot reassign it. let allows you to reassign the variable."
    },
    {
      question: "What creates a closure in JavaScript?",
      options: [
        "A function defined inside another function accessing the outer function's variable",
        "Closing a browser tab",
        "Using the 'close' keyword",
        "An infinite loop"
      ],
      correctIndex: 0,
      explanation: "A closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created."
    }
  ],
  "fe-dom": [
    {
      question: "Which method selects the first element that matches a CSS selector?",
      options: [
        "document.getElementById()",
        "document.querySelectorAll()",
        "document.querySelector()",
        "document.getElementsByClassName()"
      ],
      correctIndex: 2,
      explanation: "querySelector() returns the first Element within the document that matches the specified selector, or group of selectors."
    },
    {
      question: "How do you prevent the default behavior of a form submission?",
      options: [
        "event.stopPropagation()",
        "event.preventDefault()",
        "return false",
        "form.stop()"
      ],
      correctIndex: 1,
      explanation: "preventDefault() tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be."
    }
  ],
  "fe-async": [
    {
      question: "What does the 'await' keyword do?",
      options: [
        "Pauses the execution of the async function and waits for the Promise to resolve",
        "Makes the function run faster",
        "Stops the entire browser",
        "Creates a new thread"
      ],
      correctIndex: 0,
      explanation: "The await expression causes async function execution to pause until a Promise is settled (that is, fulfilled or rejected), and to resume execution of the async function after fulfillment."
    },
    {
      question: "Which is NOT a state of a Promise?",
      options: ["Pending", "Fulfilled", "Rejected", "Completed"],
      correctIndex: 3,
      explanation: "Promises have three states: pending (initial), fulfilled (success), and rejected (failure). 'Completed' is not a standard Promise state."
    }
  ],

  // -------------------------
  // FRONTEND ADVANCED
  // -------------------------
  "fe-adv-perf": [
    {
      question: "What metric measures visual stability?",
      options: ["LCP (Largest Contentful Paint)", "FID (First Input Delay)", "CLS (Cumulative Layout Shift)", "TTFB (Time to First Byte)"],
      correctIndex: 2,
      explanation: "CLS measures the sum total of all individual layout shift scores for every unexpected layout shift that occurs during the lifespan of the page."
    },
    {
      question: "How does Code Splitting improve performance?",
      options: [
        "It compresses images",
        "It breaks the JavaScript bundle into smaller chunks so users only load what they need",
        "It removes comments from code",
        "It uses a faster server"
      ],
      correctIndex: 1,
      explanation: "Code splitting allows you to split your code into various bundles which can then be loaded on demand or in parallel, reducing the initial load time."
    }
  ],
  "fe-adv-a11y": [
    {
      question: "What is the purpose of ARIA labels?",
      options: [
        "To style elements",
        "To provide accessible names for elements that don't have visible text",
        "To make screen readers talk faster",
        "To fix broken HTML"
      ],
      correctIndex: 1,
      explanation: "ARIA labels (aria-label) provide a string that labels the current element for assistive technologies, useful when a visual label is missing (e.g., an icon button)."
    },
    {
      question: "Navigable content should be accessible via...",
      options: ["Mouse only", "Keyboard only", "Both Mouse and Keyboard", "Touch screen only"],
      correctIndex: 2,
      explanation: "Content must be operable through a keyboard interface to be accessible to users who cannot use a mouse, but it should also work with mouse and touch."
    }
  ],
  "fe-adv-testing": [
    {
      question: "What is Unit Testing?",
      options: [
        "Testing the entire application flow",
        "Testing individual components or functions in isolation",
        "Testing the API response",
        "Manual testing by QA"
      ],
      correctIndex: 1,
      explanation: "Unit testing involves testing individual units or components of a software to validate that each unit of the software performs as designed."
    },
    {
      question: "What tool is commonly used for End-to-End (E2E) testing?",
      options: ["Jest", "React Testing Library", "Cypress / Playwright", "ESLint"],
      correctIndex: 2,
      explanation: "Cypress and Playwright are popular tools for E2E testing, simulating real user interactions in a browser environment."
    }
  ],
  "fe-adv-arch": [
    {
      question: "What is a Monorepo?",
      options: [
        "A repository with only one file",
        "A single repository containing multiple distinct projects with well-defined relationships",
        "A legacy codebase",
        "A database backup"
      ],
      correctIndex: 1,
      explanation: "A monorepo is a version control strategy where code for many projects is stored in the same repository."
    },
    {
      question: "What is Module Federation?",
      options: [
        "A Star Trek reference",
        "Allows a JavaScript application to dynamically load code from another application at runtime",
        "Merging two git branches",
        "Compressing modules"
      ],
      correctIndex: 1,
      explanation: "Module Federation (Webpack 5 feature) allows multiple independent builds to form a single application, letting them share code at runtime."
    }
  ],

  // -------------------------
  // AEM FUNDAMENTALS
  // -------------------------
  "aem-arch": [
    {
      question: "What is the role of the Dispatcher?",
      options: [
        "To edit content",
        "Caching and Load Balancing/Security",
        "Storing the database",
        "Running background jobs"
      ],
      correctIndex: 1,
      explanation: "The Dispatcher is Adobe's caching and/or load balancing tool. It also helps protect your AEM server from attacks."
    },
    {
      question: "Where do content authors work?",
      options: ["Publish Instance", "Author Instance", "Dispatcher", "Database"],
      correctIndex: 1,
      explanation: "Authors create and review content on the Author instance. Once approved, it is replicated to the Publish instance for public consumption."
    }
  ],
  "aem-components": [
    {
      question: "What language is primarily used for AEM component logic?",
      options: ["PHP", "Java (Sling Models)", "Python", "C#"],
      correctIndex: 1,
      explanation: "Sling Models (Java annotations) are the standard way to map JCR resource properties to Java objects for use in HTL."
    },
    {
      question: "What is HTL (Sightly)?",
      options: [
        "A new database query language",
        "The HTML Template Language used in AEM to render components",
        "A styling framework",
        "Adobe's version of React"
      ],
      correctIndex: 1,
      explanation: "HTL (formerly Sightly) is a secure, HTML-centric template language for AEM that separates logic (Java/JS) from markup."
    }
  ],
  "aem-clientlibs": [
    {
      question: "Why use AEM Clientlibs?",
      options: [
        "To manage dependency order, minification, and concatenation of JS/CSS",
        "To create client-side databases",
        "To write Java code in the browser",
        "It's the only way to add CSS"
      ],
      correctIndex: 0,
      explanation: "Clientlibs allow you to bundle, minify, and manage dependencies for CSS and JS resources, delivering optimized assets to the browser."
    },
    {
      question: "What property allows one clientlib to include another?",
      options: ["import", "embed / dependencies", "include", "require"],
      correctIndex: 1,
      explanation: "'embed' merges the code into the current library. 'dependencies' ensures the other library loads before the current one."
    }
  ],
  "aem-templates": [
    {
      question: "What is a major benefit of Editable Templates?",
      options: [
        "They are harder to create",
        "Authors can change the layout structure without developer involvement",
        "They use less disk space",
        "They are static HTML files"
      ],
      correctIndex: 1,
      explanation: "Editable Templates allow template authors (super-authors) to define page structure, layout containers, and allowed components without needing a code deployment."
    },
    {
      question: "Where are Editable Templates stored?",
      options: ["/apps", "/libs", "/conf", "/var"],
      correctIndex: 2,
      explanation: "Editable templates are stored under /conf. The structure of the page created from them is stored in /content."
    }
  ],
  // -------------------------
  // HTML MASTERY
  // -------------------------

  "html-basics": [
    {
      question: "Which tag is correct for the largest heading?",
      options: ["<heading>", "<h6>", "<h1>", "<head>"],
      correctIndex: 2,
      explanation: "<h1> defines the most important heading, while <h6> defines the least important."
    },
    {
       question: "What is an HTML attribute?",
       options: [
         "The content between tags",
         "A modification to an HTML element provided in the start tag",
         "A type of CSS",
         "A JavaScript function"
       ],
       correctIndex: 1,
       explanation: "Attributes provide additional information about elements and are always specified in the start tag (e.g., href, src)."
    }
  ],
  "html-text": [
    {
       question: "Which tag is used to create a hyperlink?",
       options: ["<link>", "<href>", "<a>", "<url>"],
       correctIndex: 2,
       explanation: "The <a> (anchor) tag defines a hyperlink. The 'href' attribute specifies the URL."
    },
    {
       question: "What is the semantic difference between <b> and <strong>?",
       options: [
         "None, they are the same.",
         "<b> is for bold styling, <strong> implies importance.",
         "<strong> is deprecated.",
         "<b> makes text bigger."
       ],
       correctIndex: 1,
       explanation: "<strong> indicates that its contents have strong importance, seriousness, or urgency, while <b> is stylistically offset without extra importance."
    }
  ],
  "html-media": [
    {
       question: "Which attribute is required for the <img> tag?",
       options: ["title", "src", "href", "link"],
       correctIndex: 1,
       explanation: "The 'src' (source) attribute specifies the path to the image file."
    },
    {
       question: "Which tag is used to embed another HTML page within the current page?",
       options: ["<embed>", "<object>", "<iframe>", "<frame>"],
       correctIndex: 2,
       explanation: "The <iframe> tag specifies an inline frame, which is used to embed another document within the current HTML document."
    }
  ],
  "html-lists": [
    {
       question: "Which tag creates a bulleted list?",
       options: ["<ol>", "<li>", "<ul>", "<list>"],
       correctIndex: 2,
       explanation: "<ul> stands for Unordered List, which typically renders as a bulleted list."
    },
    {
       question: "Which tag defines a cell in a table?",
       options: ["<tr>", "<th>", "<td>", "<cell>"],
       correctIndex: 2,
       explanation: "<td> stands for Table Data."
    }
  ],
  "html-block": [
    {
       question: "Which of the following is a block-level element?",
       options: ["<span>", "<div>", "<a>", "<img>"],
       correctIndex: 1,
       explanation: "A <div> is a block-level element, meaning it always starts on a new line and takes up the full width available."
    },
    {
       question: "What is the main difference between class and id?",
       options: [
         "Classes are for CSS, IDs are for JS",
         "IDs must be unique per page, Classes can be reused",
         "Classes must be unique",
         "There is no difference"
       ],
       correctIndex: 1,
       explanation: "An ID must be unique within a page, while a class name can be used by multiple elements."
    }
  ],
  "html-semantic": [
    {
       question: "Which tag represents independent, self-contained content?",
       options: ["<section>", "<div>", "<article>", "<aside>"],
       correctIndex: 2,
       explanation: "<article> specifies independent, self-contained content, like a blog post or news story, that could be distributed separately."
    },
    {
       question: "What is the correct tag for the main content of a document?",
       options: ["<content>", "<main>", "<body>", "<section>"],
       correctIndex: 1,
       explanation: "The <main> tag specifies the main content of the <body> of a document. There should be only one per page."
    }
  ],
  "html-forms": [
    {
       question: "Which attribute connects a <label> to an <input>?",
       options: ["id", "name", "for", "ref"],
       correctIndex: 2,
       explanation: "The 'for' attribute of the label must equal the 'id' attribute of the input to bind them together."
    },
    {
       question: "Which input type ensures the user enters a valid email address?",
       options: ["text", "email", "url", "search"],
       correctIndex: 1,
       explanation: "type='email' provides basic validation (checking for @) and shows the correct keyboard on mobile devices."
    }
  ],
  "html-seo": [
    {
       question: "Which tag has the biggest impact on SEO ranking and is shown in search results?",
       options: ["<h1>", "<meta name='description'>", "<title>", "<strong>"],
       correctIndex: 2,
       explanation: "The <title> tag is critical. It defines the title in browser tabs and is the large blue link in search engine results."
    },
    {
       question: "What is the purpose of the meta description?",
       options: [
         "To improve keyword ranking",
         "To describe page content in search snippets (CTR)",
         "To hide content from bots",
         "To add styles"
       ],
       correctIndex: 1,
       explanation: "While not a direct ranking factor, a good meta description improves Click-Through Rate (CTR) by enticing users to click."
    }
  ],
  "html-a11y": [
    {
       question: "What should you do for decorative images?",
       options: [
         "Remove the alt attribute",
         "Set alt='decorative'",
         "Set alt=''",
         "Use <div role='img'>"
       ],
       correctIndex: 2,
       explanation: "An empty alt attribute (alt='') tells screen readers to ignore the image completely, as it adds no meaning."
    },
    {
       question: "Which attribute declares the language of the page?",
       options: ["lang", "xml:lang", "dir", "locale"],
       correctIndex: 0,
       explanation: "The 'lang' attribute on the <html> tag (e.g., <html lang='en'>) helps screen readers use the correct pronunciation."
    }
  ],
  // -------------------------
  // CSS MASTERY
  // -------------------------

  "css-basics": [
    {
       question: "Which selector targets all <p> elements?",
       options: [".p", "#p", "p", "*"],
       correctIndex: 2,
       explanation: "The element selector `p` targets all paragraph elements on the page."
    },
    {
       question: "Which has the highest specificity?",
       options: ["div p", ".my-class", "#my-id", "style='...'"],
       correctIndex: 3,
       explanation: "Inline styles (style='...') have higher specificity than IDs, classes, and elements."
    }
  ],
  "css-colors": [
    {
       question: "What does the 'A' in RGBA stand for?",
       options: ["Aqua", "Alpha", "Array", "Ambient"],
       correctIndex: 1,
       explanation: "Alpha controls the opacity (transparency) of the color. 0 is fully transparent, 1 is fully opaque."
    },
    {
       question: "Which format is easier for humans to understand and manipulate?",
       options: ["HEX", "RGB", "HSL", "Binary"],
       correctIndex: 2,
       explanation: "HSL (Hue, Saturation, Lightness) is more intuitive. You can just change the Hue degree to change the color while keeping brightness the same."
    }
  ],
  // -------------------------
  // JS MASTERY
  // -------------------------
  "js-basics": [
    {
       question: "Which method is used to write output to the browser console?",
       options: ["console.write()", "console.output()", "console.log()", "print()"],
       correctIndex: 2,
       explanation: "console.log() is the standard method for debugging and printing output to the developer console."
    },
    {
       question: "How do you end a statement in JavaScript?",
       options: ["With a period .", "With a semicolon ;", "With a colon :", "With nothing"],
       correctIndex: 1,
       explanation: "Semicolons are used to separate JavaScript statements. While sometimes optional (ASI), it's best practice to use them."
    }
  ],
  "js-variables": [
    {
       question: "Which keyword declares a variable that cannot be reassigned?",
       options: ["let", "var", "const", "static"],
       correctIndex: 2,
       explanation: "Variables defined with `const` cannot be reassigned. Note: Object properties inside a const *can* change."
    },
    {
       question: "What is the scope of a variable declared with `let` inside a loop?",
       options: ["Global scope", "Function scope", "Block scope", "Module scope"],
       correctIndex: 2,
       explanation: "`let` and `const` are block-scoped, meaning they only exist within the nearest set of curly braces {}."
    }
  ],
  "js-functions": [
    {
       question: "Which syntax defines an Arrow Function?",
       options: ["func => {}", "() => {}", "function() {}", "-> {}"],
       correctIndex: 1,
       explanation: "Arrow functions use the `() => {}` syntax."
    },
    {
       question: "Does an Arrow Function have its own `this`?",
       options: ["Yes", "No", "Only in strict mode", "Depends on how it's called"],
       correctIndex: 1,
       explanation: "No. Arrow functions do not bind their own `this`; they inherit `this` from the surrounding (lexical) scope."
    }
  ],
  "js-objects": [
    {
       question: "How do you access the property 'name' of object `user`?",
       options: ["user('name')", "user->name", "user.name", "user:name"],
       correctIndex: 2,
       explanation: "Dot notation (`user.name`) is the most common way to access properties."
    },
    {
       question: "What is a function stored as an object property called?",
       options: ["A Method", "A Variable", "A Class", "An Event"],
       correctIndex: 0,
       explanation: "A function associated with an object is called a Method."
    }
  ],
  "js-events": [
    {
       question: "Which event fires when a user changes the value of an input field?",
       options: ["onclick", "onmouseover", "onchange", "onfocus"],
       correctIndex: 2,
       explanation: "The `change` event fires for input, select, and textarea elements when a change to the element's value is committed."
    },
    {
       question: "What is the recommended method to attach an event handler?",
       options: ["element.onclick = func", "element.addEventListener('click', func)", "onclick='func()'", "element.attach('click', func)"],
       correctIndex: 1,
       explanation: "`addEventListener` is preferred as it allows multiple listeners for the same event and provides better control."
    }
  ],
  "js-dom": [
    {
       question: "Which method finds an element by its ID?",
       options: ["document.find('#id')", "document.getElementById('id')", "document.select('id')", "$('#id')"],
       correctIndex: 1,
       explanation: "`getElementById` is the standard DOM method to finding an element by its unique ID attribute."
    },
    {
       question: "Which property changes the HTML content inside an element?",
       options: ["innerHTML", "value", "href", "style"],
       correctIndex: 0,
       explanation: "`innerHTML` sets or returns the HTML content (inner HTML) of an element."
    }
  ],

  "css-box": [
    {
       question: "Which property includes padding and border in the element's total width?",
       options: ["box-sizing: content-box", "box-sizing: border-box", "display: block", "overflow: hidden"],
       correctIndex: 1,
       explanation: "border-box creates a box model where padding and border are included in the element's total width and height."
    },
    {
       question: "Which part of the box model is transparent and creates space *outside* the border?",
       options: ["Padding", "Content", "Margin", "Outline"],
       correctIndex: 2,
       explanation: "Margin creates space around elements, outside of any defined borders."
    }
  ],

  "html-final": [
    {
      question: "Which element is used to group related options in a drop-down list?",
      options: ["<group>", "<optgroup>", "<list>", "<fieldset>"],
      correctIndex: 1,
      explanation: "<optgroup> is used to group related <option> elements within a <select> element."
    },
    {
      question: "What does the 'sandbox' attribute do in an <iframe>?",
      options: ["Enables all plugins", "Applies extra restrictions to the content", "Makes the iframe full screen", "Allows cross-origin requests"],
      correctIndex: 1,
      explanation: "The sandbox attribute enables an extra set of restrictions for the content in the iframe, enhancing security."
    },
    {
      question: "Which input type allows the user to select multiple files?",
      options: ["type='files'", "type='file' multiple", "type='list'", "type='multi'"],
      correctIndex: 1,
      explanation: "Adding the boolean attribute `multiple` to `type='file'` allows selecting multiple files."
    },
    {
      question: "Which ARIA role best describes a banner (header) of a page?",
      options: ["role='header'", "role='banner'", "role='top'", "role='main'"],
      correctIndex: 1,
      explanation: "role='banner' is the landmark role for the site-oriented content at the beginning of each page (typically the header)."
    }
  ],
  "css-final": [
    {
       question: "Which pseudo-class matches elements that are the first child of their parent?",
       options: [":child(1)", ":first-child", ":initial-child", ":start"],
       correctIndex: 1,
       explanation: ":first-child matches every element that is the first child of its parent."
    },
    {
       question: "What is the default position value of an HTML element?",
       options: ["relative", "absolute", "fixed", "static"],
       correctIndex: 3,
       explanation: "HTML elements are positioned static by default."
    },
    {
       question: "Which media query feature checks the screen width?",
       options: ["device-width", "width", "min-width", "screen-size"],
       correctIndex: 2,
       explanation: "`min-width` (or `max-width`) is the standard way to apply styles based on the viewport width."
    },
    {
       question: "In Flexbox, what does `flex-grow: 1` do?",
       options: ["Shrinks the item", "Allows the item to grow to fill available space", "Sets the initial size", "Aligns the item"],
       correctIndex: 1,
       explanation: "`flex-grow` defines the ability for a flex item to grow if necessary. 1 means it will take up available space."
    }
  ],
  "css-text": [
    {
       question: "Which unit is relative to the root font size and best for accessibility?",
       options: ["px", "em", "rem", "%"],
       correctIndex: 2,
       explanation: "rem units are relative to the root (html) font size, respecting user browser settings for text scaling."
    },
    {
       question: "How do you remove the underline from a link?",
       options: ["text-decoration: none", "text-style: no-underline", "font-style: normal", "decoration: 0"],
       correctIndex: 0,
       explanation: "text-decoration: none removes decorations like underlines, overlines, and strike-throughs."
    }
  ],
  "css-flexbox": [
      {
          question: "Which property controls alignment along the main axis?",
          options: ["align-items", "justify-content", "align-content", "flex-direction"],
          correctIndex: 1,
          explanation: "justify-content defines how the browser distributes space between and around content items along the main-axis."
      },
      {
          question: "What is the default flex-direction?",
          options: ["column", "row", "row-reverse", "column-reverse"],
          correctIndex: 1,
          explanation: "By default, a flex container arranges its items in a row (left to right in LTR languages)."
      }
  ],
  "css-grid": [
      {
          question: "Which unit represents a fraction of the available space in Grid?",
          options: ["%", "px", "fr", "rem"],
          correctIndex: 2,
          explanation: "The 'fr' unit represents a fraction of the available space in the grid container."
      },
      {
          question: "Which property is shorthand for grid-template-rows and grid-template-columns?",
          options: ["grid-template", "grid-area", "grid-gap", "display"],
          correctIndex: 0,
          explanation: "grid-template is a shorthand property for defining grid columns, rows, and areas."
      }
  ],
  "css-animations": [
      {
          question: "Which property is used to define keyframes for an animation?",
          options: ["@animation", "@keyframes", "transition", "transform"],
          correctIndex: 1,
          explanation: "The @keyframes rule specifies the animation code. The animation is created by gradually changing from one set of CSS styles to another."
      },
      {
          question: "Which property is best for performance when animating movement?",
          options: ["top / left", "margin", "padding", "transform (translate)"],
          correctIndex: 3,
          explanation: "Animating 'transform' and 'opacity' is cheap because it doesn't trigger layout or paint, only composite."
      }
  ],
  "css-responsive": [
      {
          question: "What is the correct syntax for a media query targeting screens smaller than 600px?",
          options: [
              "@media (min-width: 600px)",
              "@media (max-width: 600px)",
              "@media (width < 600px)",
              "Both B and C"
          ],
          correctIndex: 3,
          explanation: "Both (max-width: 600px) and the newer range syntax (width < 600px) target screens smaller than 600px."
      },
      {
          question: "What does the viewport meta tag do?",
          options: [
              "Sets the background color",
              "Controls layout on mobile browsers",
              "Disables zooming",
              "Hides the address bar"
          ],
          correctIndex: 1,
          explanation: "The viewport meta tag gives the browser instructions on how to control the page's dimensions and scaling."
      }
  ]
};

// React Final Quiz
export function getReactFinalQuizQuestions(): (QuizQuestion & { chapter: string })[] {
  const allQuestions: (QuizQuestion & { chapter: string })[] = [];
  const chapterNames: Record<string, string> = {
    "react-components": "Components",
    "react-state": "State",
    "react-props": "Props",
    "react-events": "Events",
    "react-lists": "Lists",
    "react-effects": "Effects",
  };

  const reactSlugs = Object.keys(chapterNames);

  for (const slug of reactSlugs) {
    if(quizData[slug]) {
         const shuffled = [...quizData[slug]].sort(() => Math.random() - 0.5);
         // Take all questions since we only have 2 per chapter for now
         const picked = shuffled.slice(0, 2); 
         picked.forEach((q) => allQuestions.push({ ...q, chapter: chapterNames[slug] }));
    }
  }

  return allQuestions.sort(() => Math.random() - 0.5);
}

// React Advanced Final Quiz
export function getReactAdvancedFinalQuizQuestions(): (QuizQuestion & { chapter: string })[] {
  const allQuestions: (QuizQuestion & { chapter: string })[] = [];
  const chapterNames: Record<string, string> = {
    "react-adv-reducer": "useReducer",
    "react-adv-context": "Context",
    "react-adv-perf": "Performance",
    "react-adv-hooks": "Custom Hooks",
    "react-adv-refs": "Refs",
  };

  const slugs = Object.keys(chapterNames);

  for (const slug of slugs) {
    if(quizData[slug]) {
         const shuffled = [...quizData[slug]].sort(() => Math.random() - 0.5);
         const picked = shuffled.slice(0, 2); 
         picked.forEach((q) => allQuestions.push({ ...q, chapter: chapterNames[slug] }));
    }
  }

  return allQuestions.sort(() => Math.random() - 0.5);
}

// Final quiz pulls from all chapters
export function getFinalQuizQuestions(): (QuizQuestion & { chapter: string })[] {
  const allQuestions: (QuizQuestion & { chapter: string })[] = [];
  const chapterNames: Record<string, string> = {
    fundamentals: "Fundamentals",
    "less-is-more": "Less Is More",
    colour: "Colour",
    layout: "Layout & Spacing",
    typography: "Typography",
    copywriting: "Copywriting",
    buttons: "Buttons",
    forms: "Forms",
  };

  for (const [slug, questions] of Object.entries(quizData)) {
    // Pick 2 random questions from each chapter
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    const picked = shuffled.slice(0, 2);
    picked.forEach((q) => allQuestions.push({ ...q, chapter: chapterNames[slug] || slug }));
  }

  return allQuestions.sort(() => Math.random() - 0.5);
}
