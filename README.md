# Ember A11y Modal

This addon is intended to provide a simple, accessible, button-triggered modal. It uses the `inert` polyfill (see https://github.com/WICG/inert). 

Please read _all_ of the usage details before considering this modal for your application. 

## Compatibility

* Ember.js v3.8.0 or above
* Ember CLI v3.8.0 or above

## Installation

Once this addon is published:

```
ember install e-a11y-modal
```

## Usage

This modal was intentionally designed to be specifically opinionated, and as a result may not fit into every application.  It is intended to be used with application development that follows the best practices of web design and development, and considers accessibility and the user experience from a practical perspective. 

The following should be kept in mind when considering use of this addon:

* application content must be inside a landmark (see https://www.w3.org/WAI/PF/aria/roles#landmark_roles)
* only use one modal per page (this is intended for simple uses cases).
* it uses the `inert` browser polyfill (see https://github.com/WICG/inert).
* the modal has a z-index of 10 (which quite frankly, should be more than enough).
* the modal must be triggered with the button interaction (a mouse click or ENTER keypress).
* the modal is triggered by a button element (and no other kinds of elements).
* when triggered, the initial focus placement is on the outside of the modal so the entire content can be read out. This is a departure from current WCAG advice, but many accessibility experts agree is better for user experience.
* the modal has a heading element inside of the modal content area that is always visible, and it must exist.
* the modal has a close button on the top right of the modal, but can also be closed by pressing the `ESC` key.
* when the modal is open, scrolling of content underneath the modal is prevented.
* when the modal is open, focus (either by tab key or virtual cursor) will not reach the window underneath, but users will still be able to reach the URL bar.

## Contributing

Contributions to this addon are welcome. Contributors should consider the design constraints (listed above in "Usage") when submitting a PR for consideration. Please ensure that any PR includes what is being done, tests, and any screenshots that may aid in consideration for inclusion in this addon.

## License

This project is licensed under the [MIT License](LICENSE.md).
