/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ChatWindow from '../components/ChatWindow';
import '@testing-library/jest-dom';

describe('ChatWindow', () => {
    const mockSendMessage = jest.fn();

    beforeEach(() => {
        render(<ChatWindow messages={[]} onSendMessage={mockSendMessage} />);
    });

    it('should render input and send button', () => {
        expect(screen.getByPlaceholderText('Type your message...')).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should allow typing in input and send message on button click', () => {
        const input = screen.getByPlaceholderText('Type your message...');
        fireEvent.change(input, { target: { value: 'Hello' } });
        expect(input.value).toBe('Hello');
    
        const sendButton = screen.getByRole('button');
        fireEvent.click(sendButton);
        expect(mockSendMessage).toHaveBeenCalledWith({ text: 'Hello', sender: 'customer' }); // Match the new message object structure
    });
});
