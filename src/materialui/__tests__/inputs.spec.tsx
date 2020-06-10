import * as React from 'react';
import { mount } from 'enzyme';
import {
    FileUploadWidget,
    FileView,
    FileViewWithModalComponent,
    ArrayFileUploadWidget,
} from '../inputs';

const files = [
    { name: 'filename1.jpg', mimeType: 'image/jpeg' },
    { name: 'filename2.pdf', mimeType: 'application/pdf' },
];

describe('File View', () => {
    it('should show File View', () => {
        const component = mount(<FileView file={files[0]} />);
        expect(component).toBeDefined();
    });
});

describe('File Upload Widget', () => {
    it('should show File Upload Widget', () => {
        const component = mount(
            <FileUploadWidget file={files[0]} onChange={() => {}} accept="image/*,.pdf" onClearForm={() => {}} />
        );
        expect(component).toBeDefined();
    });
});

describe('File View With Modal', () => {
    it('should show File View With Modal', () => {
        const component = mount(<FileViewWithModalComponent file={files[0]} onClearForm={() => {}} />);
        expect(component).toBeDefined();
    });
});

describe('Array File Upload Widget', () => {
    it('should show Array File Upload Widget', () => {
        const component = mount(
            <ArrayFileUploadWidget
                errorFiles={[]}
                files={files}
                onChange={() => {}}
                onFocus={() => {}}
                onBlur={() => {}}
                mimeTypes={['image/jpeg', 'image/png']}
                isError={false}
                uploadError="upload error"
                placeholder="placeholder"
                onClearForm={() => {}}
            />
        );
        expect(component).toBeDefined();
        // component.setState({ dragging: true });
    });

    it('should show Array File with isError true', () => {
        const component = mount(
            <ArrayFileUploadWidget
                errorFiles={[]}
                files={files}
                onChange={() => {}}
                mimeTypes={['image/jpeg', 'image/png']}
                isError={true}
                uploadError="upload error"
                placeholder="placeholder"
                onClearForm={() => {}}
            />
        );
        expect(component).toBeDefined();
    });
});
