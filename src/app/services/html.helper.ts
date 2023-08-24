export const getValue = function(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }