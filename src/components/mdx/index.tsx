import DefaultLayout from '../../layouts'
import CodeBlock from './code-block'
import TestTextInput from './test-text-input'
import TestTextInputAsync from './test-text-input-async'
import PageComponent from './page-component'
export default {
  DefaultLayout,
  TestTextInput: (props: any) => (
    <PageComponent>
      <TestTextInput {...props} />
    </PageComponent>
  ),
  TestTextInputAsync: (props: any) => (
    <PageComponent>
      <TestTextInputAsync {...props} />
    </PageComponent>
  ),
  h1: (props: any) => (
    <h1
      className="mt-10 mb-4 leading-tight text-gray-800 text-28 font-300"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2 className="mt-10 mb-4 text-gray-500 text-24 font-300" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="mt-10 mb-4 text-gray-500 font-500" {...props} />
  ),
  h4: (props: any) => <s {...props} />,
  h5: (props: any) => <s {...props} />,
  h6: (props: any) => <s {...props} />,
  a: (props: any) => <a className="text-blue-700 underline" {...props} />,
  p: (props: any) => <p className="mb-5 " {...props} />,
  li: (props: any) => <li className="text-gray-600 list-disc" {...props} />,
  ul: (props: any) => <ul className="mb-4 ml-5" {...props} />,
  ins: (props: any) => (
    <ins className="block px-4 -mx-4 bg-green-800" {...props} />
  ),
  del: (props: any) => (
    <ins className="block px-4 -mx-4 bg-blue-800" {...props} />
  ),

  'link-icon': (props: any) => (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
      />
    </svg>
  ),
  code: (props: any) => <code className="bg-blue-600 text-16" {...props} />,
  blockquote: (props: any) => <blockquote className="italic" {...props} />,
  pre: (props: any) => (
    <CodeBlock
      language={props.children.props.className || ''}
      metastring={props.children.props.metastring}
    >
      {props.children.props.children}
    </CodeBlock>
  ),
}
