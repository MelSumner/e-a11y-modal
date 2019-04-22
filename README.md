# Ember A11y Modal

This addon is intended to provide a simple, accessible, button-triggered modal. It uses the `inert` polyfill (see https://github.com/WICG/inert). 

Please read _all_ of the design details before considering this modal for your application.

## Compatibility

* Ember.js v3.8.0 or above
* Ember CLI v3.8.0 or above

## Installation

Once this addon is published:

```
ember install e-a11y-modal
```

## Design

This modal was intentionally designed, and as a result may not fit into an existing application, if it has not previously considered accessibility and other best practices for front-end web design and development.  It is intended to be used with application development that follows the best practices of web design and development, and considers accessibility and the user experience from a practical perspective.

The following should be kept in mind when considering use of this addon:

* this addon uses the `inert` browser polyfill (see https://github.com/WICG/inert).
* the modal has a z-index of 10.
* when triggered, the initial focus placement is on the outside of the modal so the entire content can be read out. While this is a departure from current WCAG advice, many accessibility experts agree that this is better for user experience.
* the modal has a close button on the top right of the modal, but can also be closed by pressing the <kbd>ESC</kbd> key.
* when the modal is open, scrolling of content underneath the modal is prevented.
* when the modal is open, focus (either by <kbd>TAB</kbd> key or virtual cursor) will not reach the window underneath, but users will still be able to reach the URL bar (users can typically do this anyway by pressing the <kbd>F6</kbd> key)

Addons & libraries used in making this addon:

* @ember/optional-features (to turn off the [wrapping `div`](https://github.com/emberjs/ember-optional-features) in an Ember App)
* wicg-inert to add the `inert` functionality

## Usage

* authors must only use one modal per page.
* authors must put all application content inside a landmark (see https://www.w3.org/WAI/PF/aria/roles#landmark_roles) - **except** for the modal (see examples below). When the modal is triggered, the landmarks will be marked with `inert` and `aria-hidden="true"` will be applied, which will effectively trap the focus inside of the modal while it is open. For the user with a screen reader, **either** the modal will exist, **or** the rest of the page will exist, but never both at the same time.
* authors must trigger the modal with a `<button>` element.
* authors must provide a value for `modalHeadingText`.

### Example: standard usage

```hbs
<ModalWindow
  @modalHeadingText="Modal Title"
  @buttonText="I am the modal trigger button">
  {{!-- Any modal content can go in this block --}} 
</ModalWindow>
```  

### Example: page layout

```hbs
<body>
  
  <header>
    {{!-- header block content here --}}
  </header>
  
  <main>
    {{!-- main block content here --}}
  </main>
  
  <ModalWindow
    @modalHeadingText="Modal Title"
    @buttonText="I am the modal trigger button">
      {{!-- Any modal content can go in this block --}} 
  </ModalWindow>

  <footer>
    {{!-- footer block content here --}}
  </footer>

</body>
```

## Contributing

Contributions to this addon are welcome. Contributors should consider the design constraints (listed above in "Design" and "Usage") when submitting a PR for consideration. Please ensure that any PR includes what is being done, tests, and any screenshots that may aid in consideration for inclusion in this addon.

## License

This project is licensed under the [MIT License](LICENSE.md).
