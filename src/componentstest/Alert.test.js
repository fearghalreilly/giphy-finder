import { render, fireEvent } from '@testing-library/react'

import Alert from '../components/Search'

it ('Check Alert Button', () => {
    const { queryByTitle} = render(<Alert />);
    const btn = queryByTitle('errorbtn');
    expect(btn).toBeFalsy();
});

it ('Check Alert Button Text', () => {
    const { queryByTitle} = render(<Alert />);
    const btn = queryByTitle('errortext');
    expect(btn.textContent()).toBe('Please enter something');
});




