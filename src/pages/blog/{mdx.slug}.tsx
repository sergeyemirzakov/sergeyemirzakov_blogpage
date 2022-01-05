import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../../components/layout';
import { BsArrowLeftShort } from 'react-icons/bs';

interface DataProps {
  data: {
    mdx: {
      body: string;
      frontmatter: {
        date: string;
        title: string;
      };
    };
  };
}

const BlogPost: React.FC<DataProps> = ({ data }) => {
  console.log(data);

  return (
    <Layout pageTitle="Блог">
      <Link to="/blog" className="text-xl flex items-center hover:text-pink-500">
        <BsArrowLeftShort size="2rem" />
        Вернуться на страницу блога
      </Link>
      <h1 className="text-5xl font-bold my-16">{data.mdx.frontmatter.title}</h1>
      {/* <p>{data.mdx.frontmatter.date}</p> */}
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default BlogPost;
