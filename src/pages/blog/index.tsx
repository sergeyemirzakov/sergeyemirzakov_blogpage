import * as React from 'react';
import Layout from '../../components/layout';
import { Link, graphql } from 'gatsby';
import { BsCalendar4Week } from 'react-icons/bs';

interface EntryProps {
  data: {
    allMdx: {
      nodes: [
        {
          frontmatter: {
            date: string;
            title: string;
          };
          id: string;
          slug: string;
        },
      ];
    };
  };
}

const Blog: React.FC<EntryProps> = ({ data }) => {
  return (
    <Layout pageTitle="Блог">
      <div className="divide-y divide-slate-600">
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <Link
              to={`/blog/${node.slug}`}
              className="article_front_content
              block
              p-5 my-4
              transition-colors
              duration-100
              rounded-md
              hover:bg-slate-500 hover:text-white dark:hover:bg-slate-500">
              <h1 className="mb-3 font-bold">{node.frontmatter.title}</h1>
              <p className="text-xl flex items-baseline">
                {<BsCalendar4Week size="1.8rem" className="mr-3" />}
                {node.frontmatter.date}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default Blog;
