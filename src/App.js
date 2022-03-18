import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      // Generate contextual modifier classes for colorizing the alert.

@each $state, $value in $theme-colors {
  $alert-background: shift-color($value, $alert-bg-scale);
  $alert-border: shift-color($value, $alert-border-scale);
  $alert-color: shift-color($value, $alert-color-scale);
  @if (contrast-ratio($alert-background, $alert-color) < $min-contrast-ratio) {
    $alert-color: mix($value, color-contrast($alert-background), abs($alert-color-scale));
  }
  .alert-#{$state} {
    @include alert-variant($alert-background, $alert-border, $alert-color);
  }
}
// List group contextual variants
//
// Add modifier classes to change text and background color on individual items.
// Organizationally, this must come after the `:hover` states.

@each $state, $value in $theme-colors {
  $list-group-variant-bg: shift-color($value, $list-group-item-bg-scale);
  $list-group-variant-color: shift-color($value, $list-group-item-color-scale);
  @if (contrast-ratio($list-group-variant-bg, $list-group-variant-color) < $min-contrast-ratio) {
    $list-group-variant-color: mix($value, color-contrast($list-group-variant-bg), abs($list-group-item-color-scale));
  }

  @include list-group-item-variant($state, $list-group-variant-bg, $list-group-variant-color);
}
    </div>
  );
}

export default App;
