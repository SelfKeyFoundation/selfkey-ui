import * as React from 'react';
import { create } from 'react-test-renderer';
import { 
  FileUploadWidget,
  FileView,
  // ArrayFileUploadWidget,
  FileViewWithModalComponent
} from '../../theme/selfkey-dark-theme';

describe('File View', () => {
  it('should show File View', () => {
    const component = create(
      <FileView 
        file={[{name: 'filename'},
        {url: 'akarmi.jpg'}]} 
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('File Upload Widget', () => {
  it('should show File Upload Widget', () => {
    const component = create(
      <FileUploadWidget
        file={('file')}
        onChange={() => {}}
        accept="image/*,.pdf"
        onClearForm={() => {}}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('File View With Modal', () => {
  it('should show File View With Modal', () => {
    const component = create(
      <FileViewWithModalComponent 
      file={'file.mp4'} 
      onClearForm={() => {}} 
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// describe('Array File Upload Widget', () => {
//   it('should show Array File Upload Widget', () => {
//     const component = create(
//         <ArrayFileUploadWidget
//             errorFiles={[]}
//             files={['filename1.jpg', 'filename2.pdf']}
//             onChange={() => {}}
//             mimeTypes={['image/jpeg', 'image/png']}
//             isError={false}
//             uploadError='upload error'
//             placeholder='placeholder'
//             onClearForm={() => {}}
//             // }}
// 				/>
//     );
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
