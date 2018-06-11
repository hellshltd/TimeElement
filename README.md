# TimeElements.js

A Javascript library to turn UNIX timestamps into user-readable text including their timezone.

[Try the demo.](https://hellshltd.github.io/TimeElements.js/)

## Installing

You can either load the script from cdn.hell.sh using

    <script src="https://cdn.hell.sh/TimeElements.js/1.0.1/TimeElements.js" integrity="sha384-c6XB8Gu93MHOo6LOG8Y9PlpUUKyKDvpVlSwcGWKdJd7JVdifnKM7hiu190mecbKk" crossorigin="anonymous"></script>

or [download the TimeElements.js](https://raw.githubusercontent.com/hellshltd/TimeElements.js/master/TimeElements.js) and host it yourself.

## `calculateTimeElements([options])`

(Re)Calculates all time elements.

**Options:**

You can pass an object (`{}`) with any of these values in it:

- `year`: Formatting if timestamp's year is unequal to the current one. (Default: `{y}-{m}-{d}`)
- `date`: Formatting if timestamp's date is equal to current one. (Default: `{m}-{d}`)
- `time`: Time formatting. (Default: `{h}:{i}`)
- `datetime`: Formatting if both date and time are shown. (Default: `{date} {time}`)

## Attributes

- `data-time` specifies that this is a TimeElement and the value is the timestamp that is to be evaluated.
- `data-notime` specifies that only the date of the timestamp is to be shown.
- `data-ignore-time-element` specifies that this TimeElement is to be ignored when TimeElements are being (re)calculated.
