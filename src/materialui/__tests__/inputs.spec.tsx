import * as React from 'react';
import { mount } from 'enzyme';
import { 
  FileUploadWidget,
  FileView,
  FileViewWithModalComponent,
  ArrayFileUploadWidget
} from '../../theme/selfkey-dark-theme';

describe('File View', () => {
  it('should show File View', () => {
    const component = mount(
      <FileView 
        file={[{name: 'filename'},
        {url: 'akarmi.jpg'}]} 
      />
    );
    expect(component).toBeDefined();
  });
});

describe('File Upload Widget', () => {
  it('should show File Upload Widget', () => {
    const component = mount(
      <FileUploadWidget
        file={('file')}
        onChange={() => {}}
        accept="image/*,.pdf"
        onClearForm={() => {}}
      />
    );
    expect(component).toBeDefined();
  });
});

describe('File View With Modal', () => {
  it('should show File View With Modal', () => {
    const component = mount(
      <FileViewWithModalComponent 
      file={'file.mp4'} 
      onClearForm={() => {}} 
      />
    );
    expect(component).toBeDefined();
  });
});

describe('Array File Upload Widget', () => {
  it('should show Array File Upload Widget', () => {
    const component = mount(
        <ArrayFileUploadWidget
            errorFiles={[]}
            files={['filename1.jpg', 'filename2.pdf']}
            onChange={() => {}}
            mimeTypes={['image/jpeg', 'image/png']}
            isError={false}
            uploadError='upload error'
            placeholder='placeholder'
            onClearForm={() => {}}
				/>
    );
    expect(component).toBeDefined();
    component.setState({ dragging: true });
    console.log(component.state('dragging'));
    component.update();
    console.log(component.find('#dragging').prop('className'));
    console.log(component.find('#dragging').hasClass('ArrayFileUploadWidgetComponent-dropArea-1912'));
    console.log(component.find('#dragging').hasClass('ArrayFileUploadWidgetComponent-highlite-1913'));
  });
});