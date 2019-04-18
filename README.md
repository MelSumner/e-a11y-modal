# Ember A11y Modal

This addon is intended to provide an accessible, button-triggered modal. It uses the `inert` polyfill (see https://github.com/WICG/inert).

## Compatibility

* Ember.js v3.8.0 or above
* Ember CLI v3.8.0 or above

## Installation

```
ember install e-a11y-modal
```

## Usage

This modal was designed to be specifically opinionated (and is more opinionated than the modal it was inspired by). It is intended to be used with application development that follows best practices and considers accessibility from the start. It also considers the user experience from a practical perspective.

The following should be kept in mind when considering use of this addon:

* it uses the `inert` browser polyfill (see https://github.com/WICG/inert)
* the modal has a z-index of 10
* the modal must be triggered (it cannot automatically happen)
* the modal is triggered by a button
* when triggered, the initial focus placement is on the outside of the modal so the entire content can be read out
* the modal has a heading element inside of the modal content area that is always visible
* the modal has a close button, but can also be closed by pressing the `ESC` key
* when the modal is open, scrolling of content underneath the modal is prevented
* when the modal is open, focus (either by tab key or virtual cursor) will not reach the window underneath

## Contributing

Contributions to this addon are welcome. Contributors should consider the design constraints (listed above in "Usage") when submitting a PR for consideration.

## License

This project is licensed under the [MIT License](LICENSE.md).
